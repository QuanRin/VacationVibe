const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const fs = require("fs");
const mime = require("mime-types");
const User = require("./models/User");
const Place = require("./models/Place");
const Booking = require("./models/Booking");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "WU6Ex4KaMD1rT85GVXxqLTq5G&UK8mPqYwUe$RMm";
const bucket = process.env.S3_BUCKET;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_BASE_URL,
  })
);

async function uploadToS3(path, originalFilename, mimetype) {
  const client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });
  const parts = originalFilename.split(".");
  const ext = parts[parts.length - 1];
  const newFilename = Date.now() + "." + ext;
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Body: fs.readFileSync(path),
      Key: newFilename,
      ContentType: mimetype,
      ACL: "public-read",
    })
  );
  return `https://${bucket}.s3.amazonaws.com/${newFilename}`;
}

function getUserDataFromToken(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.get("/api/", (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    res.json("test ok");
  });