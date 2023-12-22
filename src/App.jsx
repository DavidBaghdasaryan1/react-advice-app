import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("")

  useEffect(() => {
    fettchAdvice();
  },[])

  const fettchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => {
        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const {advice} = data.slip
        setAdvice(advice);
      })
      .catch(error=>{
        console.error("fetch error", error)
      })
  }

  return (
    <div className='app'>
      <div className="card">
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fettchAdvice}>
          <span>Give me advice</span>
        </button>
      </div>
    </div>
  )
}

export default App
