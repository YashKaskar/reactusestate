import { useState } from "react"

const Home = () => {

  const [name, setName] = useState('Naruto');

  return (
    <div> 
          <h1> {name}</h1>
          <button onClick={() => setName('Obito')}> Click to change name</button>
      
    </div>
  )
}

export default Home
