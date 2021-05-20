import React, { useEffect, useState } from 'react'
import "./App.css"
import Search from './components/Search'

const Video = (params) => {
  return <div className="vid-wrapper">
    <video src={params.videoUrl} autoPlay={true}>
    </video>
  </div>
}


export default function App() {
  const [videoUrl, setVideo] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (result.length > 0) {
      setVideo(result[0].path)
    }
  }, [result])

  return (
    <>
      <Video videoUrl={videoUrl} />
      <Search handleResult={setResult} />
    </>
  )
}
