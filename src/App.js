import React, { useEffect, useState, useRef } from 'react'
import "./App.css"
import Search from './components/Search'

const Video = (params) => {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  }

  return <div className="vid-wrapper">
    <video ref={vidRef} src={params.videoUrl} autoPlay={true}>
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
