import React, {useState, useEffect} from 'react'
import './App.css';

const IMG_NN = 'NN'
const IMG_URL = `https://github.com/acharlop/whocards/blob/main/images/${IMG_NN}.png?raw=true`

const randomNumber = () => Math.ceil(Math.random() * 6)

function App() {
  const [img,setImg] = useState(1)

  useEffect(() => {
    // set interval
    const interval = setInterval(() => {
      setImg(randomNumber())
    }, 3000)
    // clear interval
    return () => clearInterval(interval)
  }, [img])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Who Cards</h1>
        <img src={IMG_URL.replace(IMG_NN, img.toString())} className="App-logo" alt="logo" />
        <p className="coming-soon">
          Coming soon!
        </p>
      </header>
    </div>
  );
}

export default App;
