import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    console.log("APIルートが呼び出されました");
    const backendResponse = await fetch('http://service-backend.stage.ecs-training-container.local:8080/api/health');
    const data = await backendResponse.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("APIルートでエラーが発生しました:", error);
    res.status(500).json({ message: 'バックエンドサーバーに接続できませんでした' });
  }
}
