import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

// This function takes a string and splits it by a space
// This is an example of a function that returns an array
const getName = ((name) => {
  const nameSplit = name.split(" ")
  return [nameSplit[0], nameSplit[1]]
})

function App() {
  // Going to start this value at 0 (initial state)
  const [books, setBooks] = useState(0)
  // Going to start this value at 1 (initial state)
  const [audiobooks, setAudiobooks] = useState(1)
  // This state is in order to controll the input value
  const [inputValue, setInputValue] = useState();
  // Here we are destructuring the array returned by getName
  const [firstName, lastName] = getName("Rebekah Callari");

  // This is a handler function to add one to books
  const handleClickAddBooks = () => {
    setBooks(books + 1)
  };

  // This is a handler function to subtract one from books
  const handleClickSubtractBooks = () => {
    setBooks(books - 1)
  };

  // This is a handler function to add one to audiobooks
  const handleClickAddAudiobooks = () => {
    setAudiobooks(audiobooks + 1)
  };

  return (
    <>
      <h3>{`Owner: ${lastName ?? "-"}, ${firstName ?? "-"}`}</h3>
      <h3>Total of Count 1: </h3>
      <h3>{books}</h3>
      {/* These two buttons both update books */}
      <div className="card">
        <Button title={"Add 1 book"} handleClick={handleClickAddBooks}/>
        <Button title={"Subtract 1 book"} handleClick={handleClickSubtractBooks}/>
      </div>
      <h3>Total of Count 2: </h3>
      <h3>{audiobooks}</h3>
      {/* This button updates audiobooks */}
      <Button title={"Add 1 audiobook"} handleClick={handleClickAddAudiobooks}/>
      <p>Sample Input</p>
      <p>Controlled Input</p>
      {/* This is a controlled input because the value is defined by inputValue (a variable) */}
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
      {/* This is JUST an example (don't do this) -> this is not a controlled input 
      but on change, it calls the setState function for the controlled input above.
      If you type in this input, you'll see the other input value change */}
      <p>Not a controlled input but updates the other input when it changes</p>
      <input onChange={(event) => setInputValue(event.target.value)}></input>
    </>
  )
}

export default App
