'use client'
// 例えば、Buttonコンポーネントからのリクエスト

import React from 'react'

const Button = () => {
  const handleHealthCheck = async () => {
    try {
      const response = await fetch('/api/health')
      const data = await response.json()

      // ここでレスポンスデータを使用
      console.log(data.message)
    } catch (error) {
      console.error('APIへのリクエスト中にエラーが発生しました', error)
    }
  }

  return <button onClick={handleHealthCheck}>接続チェック</button>
}

export default Button
