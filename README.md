# VacationVibe: Vacation Rental Booking App

VacationVibe is a Full Stack Booking App that enables users to book vacation rentals, providing a seamless experience for reserving accommodations. The app allows users to create listings for their own properties, giving property owners the opportunity to showcase their rentals to potential guests. With VacationVibe, users can easily search for available properties, view property details, make bookings, and manage their reservations.


## Key Features

- **Booking System:** Users can easily search for available properties and make bookings.
- **Listing Creation:** Property owners can create and manage their listings.
- **Dashboard:** Property owners have access to a dashboard where they can manage their listings and view booking requests.
- **User Accounts:** Users can create accounts to save their favorite properties and manage their bookings.

## Technology Stack

The application was developed using the following technologies:

- **MongoDB:** A NoSQL database used to store property and user data.
- **Express.js:** A server-side framework for building RESTful APIs and handling server-side logic.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework used for styling the frontend.
- **Node.js:** A JavaScript runtime environment used to run the server-side code.
- **Vercel:** A cloud platform for static site hosting and deployment, used to deploy the frontend of the application.
- **AWS S3:** Amazon Simple Storage Service (S3) for file storage, allowing users to upload and retrieve property images. It enables secure and scalable file storage, ensuring a reliable and efficient system for handling property images.

## Getting Started

To run the VacationVibe app locally, follow these steps:

1. Clone this repository
2. Navigate to the project directory: `cd VacationVibe`
3. Install the dependencies:
   - Backend: Navigate to the `api` folder and run `npm install`
   - Frontend: Navigate to the `client` folder and run `npm install`
4. Create a `.env` file in the `api` folder base on `.env.example` file for the required variables.
5. Start the development servers:
   - Backend: In the `api` folder, run `npm run dev`
   - Frontend: In the `client` folder, run `npm run start`

Now, you can access the VacationVibe app by opening your browser and visiting `http://localhost:4000`.

## Folder Structure

The project follows a specific folder structure:

- `api/`: Contains the backend code, including server setup, routes, and models.
- `client/`: Contains the frontend code, including React components, styles, and assets.

