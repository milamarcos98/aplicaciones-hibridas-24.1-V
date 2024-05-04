
import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter';
import List from './components/List';

function App() {
  let nombre = "Pepe";

  const items = ["Demon Slayer", "One Piece", "Jujutsu Kaisen", "Fruits Basket", "Death Note"];
  const [selectValue, setSelectedValue] = useState("");

  return(
    <div>
      <h1>{selectValue}</h1>
      {/* <h1>Hola {nombre}!</h1> */}
      {/* <Counter/> */}
      <List items={items} setSelectedValue={setSelectedValue}/>
      <Card>
        <h2>Card</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro exercitationem unde nobis maxime quos impedit veritatis tempore debitis perferendis corrupti deleniti omnis laboriosam voluptatum, numquam ratione eligendi! Officia, in.</p>
      </Card>
      {/* <Button text="Boton 1" color="pink" style={{backgroundColor: 'pink', color: 'white'}} onClick={() => console.log("hola")}/>
      <Button text={"Enviar"} color={"violet"} style={{backgroundColor: "blue", color: "whitesmoke"}} onClick={() => console.log("Hola Click")}/>
      <Button text="Boton 2" color="blue" style={{backgroundColor: 'blue', color: 'white'}} onClick={() => console.log("hola 2")}/> */}
    </div>
  )

}

export default App
