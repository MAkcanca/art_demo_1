import React, { useEffect, useState } from 'react'
import "./App.css"
import Search from './components/Search'

const Video = (params) => {

  return <video src={params.videoUrl}></video>
}


export default function App() {
  const [videoUrl, setVideo] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <>
      <Video videoUrl={videoUrl} />
      <Search handleResult={setResult} />
    </>
  )
}
