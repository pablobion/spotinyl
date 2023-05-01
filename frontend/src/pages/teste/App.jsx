import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const getAcessToken = async() => {
    const respo = fetch('http://localhost:3000/login', {
      method: 'GET',
      mode: 'cors'
    });

    console.log(respo)
  }

  return (
    <div className="App">
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => getAcessToken()}>pegar acess token</button>
        <a href="http://localhost:3000/login">sign in with facebook</a>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
