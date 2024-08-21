import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

const Layout = () => {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;



// ## Getting Started

// Vacation Vibe アプリをローカルで実行するには、次の手順に従います。

// 1. このリポジトリをクローンします
// 2. プロジェクト ディレクトリに移動します: `cd VacationVibe`
// 3. 依存関係をインストールします:
// - バックエンド: `api` フォルダーに移動し、`npm install` を実行します
// - フロントエンド: `client` フォルダーに移動し、`npm install` を実行します
// 4. 必要な変数の `.env.example` ファイルに基づいて、`api` フォルダーに `.env` ファイルを作成します。
// 5. 開発サーバーを起動します:
// - バックエンド: `api` フォルダーで、`npm run dev` を実行します
// - フロントエンド: `client` フォルダーで、`npm run start` を実行します

// これで、ブラウザを開いて `http://localhost:4000` にアクセスすると、Vacation Vibe アプリにアクセスできるようになります。

// ## Folder Structure

// プロジェクトは特定のフォルダー構造に従います:

// - `api/`: サーバー設定、ルート、モデルなどのバックエンド コードが含まれます。
// - `client/`: React コンポーネント、スタイル、アセットなどのフロントエンド コードが含まれます。


