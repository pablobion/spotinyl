import { useState } from 'react'


function Test() {
    const [count, setCount] = useState(0)
  
    const getAcessToken = async() => {
      const respo = fetch('http://localhost:3000/login', {
        method: 'GET',
        mode: 'cors'
      });
  
      console.log(respo)
    }

    return (
        <h1>asuhsauhs</h1>
    )
}

export default Test
