import { useState } from "react"

const Home = () => {

  const [name, setName] = useState('Naruto');
  const [age, setAge] = useState(15);


  const click = () => { 
    setName('Obito');
    setAge(25)
  }

  return (
    <div> 
      <h1> {name} and he's from Annime called Naruto and his age is {age} years old </h1>
          <button onClick={click}> Click to change name and age</button>
      
    </div>
  )
}

export default Home
