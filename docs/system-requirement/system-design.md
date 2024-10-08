# NarratiAct システム設計

## 1. ユーザーインターフェース

### 1.1 ダッシュボード

- 現在のナラティブ概要
- 進行中のプロジェクト
- 最近の洞察獲得履歴
- ペルソナの現状

### 1.2 ナラティブエディタ

- 新規ストーリーセグメントの作成
- 既存セグメントの編集
- ナラティブの全体構造の可視化

### 1.3 オポチュニティボード

- 利用可能なプロジェクトの一覧
- プロジェクトの詳細情報
- プロジェクトの受諾・完了報告機能

### 1.4 成長記録

- 完了したプロジェクトの記録
- 獲得した洞察の詳細
- 気づきや学びのメモ機能

### 1.5 ペルソナビューワー

- 現在のペルソナの視覚化
- 資質や特性の詳細表示
- 成長の軌跡を示すグラフ

## 2. バックエンドシステム

### 2.1 ナラティブアシスタント

- 探索者情報に基づくナラティブ提案
- 既存ナラティブの分析と展開案の生成

### 2.2 プロジェクト生成エンジン

- ナラティブに基づくプロジェクト自動生成
- 探索者の進捗に応じたプロジェクト難易度調整

### 2.3 洞察計算システム

- プロジェクト完了時の洞察算出
- 多面的な成長指標の計算

### 2.4 ペルソナ進化アルゴリズム

- 獲得洞察に基づくペルソナ更新
- 新規資質や特性の解放ロジック

### 2.5 データ分析エンジン

- 探索者の行動パターン分析
- ナラティブとプロジェクトの相関分析
- 成長の軌跡の可視化

## 3. データベース設計

- 探索者情報テーブル
- ナラティブテーブル
- プロジェクトテーブル
- 成長記録テーブル
- ペルソナテーブル
- 資質・特性テーブル

## 4. セキュリティ設計

- 探索者認証システム
- データ暗号化
- プライバシー設定管理

## 5. 拡張性

- API設計（外部サービス連携用）
- プラグインシステム（機能拡張用）
- 多言語対応

## 6. パフォーマンス最適化

- データベースのインデックス設計
- キャッシュシステムの実装
- 非同期処理の活用
