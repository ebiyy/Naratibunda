# NarratiAct POC技術スタック

## フロントエンド (Web & デスクトップ)

- **フレームワーク**: Next.js (App Router)
  - Reactベースの最新のWebアプリケーションフレームワーク
  - サーバーサイドレンダリング(SSR)とスタティックサイト生成(SSG)のサポート
- **デスクトップアプリケーション**: Tauri
  - Rustベースの軽量でセキュアなデスクトップアプリケーションフレームワーク
- **言語**: TypeScript
  - 型安全性を確保し、開発効率と保守性を向上
- **スタイリング**: Tailwind CSS
  - ユーティリティファーストのCSSフレームワークで迅速な開発を実現
- **状態管理**: React Context API + SWR
  - 軽量な状態管理とデータフェッチの最適化
- **国際化**: next-intl
  - Next.js App Routerと統合しやすい国際化ライブラリ

## バックエンド

- **API**: Hono
  - 軽量で高速なWebフレームワーク、Cloudflare Workersとの相性が良い
- **データベース**: Cloudflare D1
  - エッジで動作するSQLiteベースのデータベース
- **ストレージ**: Cloudflare R2
  - S3互換のオブジェクトストレージ、画像保存に使用

## 開発ツール

- **パッケージマネージャ**: pnpm
  - 高速で効率的な依存関係管理
- **モノレポ管理**: Turborepo
  - 効率的なビルドとタスク実行を提供
- **バージョン管理**: Git with GitHub
  - ソースコードのバージョン管理とコラボレーションを促進
- **コード品質**: Biome
  - 高速で統合されたJavaScript/TypeScriptツールチェーン
- **テスト**: Vitest, Testing Library
  - 高速なユニットテストとインテグレーションテストの実施

## デプロイメント

- **Webホスティング**: Cloudflare Pages
  - 静的サイトとサーバーサイドレンダリングのホスティング
- **APIホスティング**: Cloudflare Workers
  - エッジでのAPIホスティングとサーバーレス関数の実行
- **デスクトップアプリビルド**: GitHub Actions
  - Tauriアプリケーションの自動ビルドとリリース

## 認証

- **認証プロバイダ**: Cloudflare Access
  - Cloudflareのエコシステムと統合された認証ソリューション

## モニタリング

- **エラー追跡**: Cloudflare Workers Observability
  - Cloudflare Workersに統合されたモニタリングツール

## 将来の拡張性を考慮したオプション

- **モバイルアプリ開発**: React Native
  - 将来的にモバイルアプリが必要になった場合の選択肢
- **APIレイヤー**: tRPC
  - 型安全なAPI通信が必要になった場合に導入を検討
- **リアルタイム通信**: Cloudflare Durable Objects
  - ステートフルなリアルタイム機能が必要になった場合の選択肢
  