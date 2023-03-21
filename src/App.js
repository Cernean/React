import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import ButtonBar from './components/ButtonBar';

function App() {
  let [data, setData] = useState({})
  let [objectId, setObjectId] = useState(12770)

useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    .then(response => response.json())
    .then(resJson => setData(resJson))
}, [objectId])

const displayImage = () => {
  if (!data.primaryImage) {
    return (
      <h2>No Image!</h2>
    )
  }
  return (
    <Gallery objectImg={data.primaryImage} title={data.title}/>
  )
}

const handleIterate = (e) => {
  setObjectId(objectId + Number(e.target.value))
}

  return (
    <div className="App">
      <hi>{data.title}</hi>
      <div style={{'width': '100vw'}}>
        {displayImage()}
      </div>
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App
