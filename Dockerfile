# ベースイメージ
FROM node:21.1.0

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ビルド
RUN npm run build

# ポートの公開
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "start"]
