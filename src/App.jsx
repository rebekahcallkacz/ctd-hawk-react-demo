import { useState, useEffect } from 'react'
import './App.css'
import Button from './Button'

// This function takes a string and splits it by a space
// This is an example of a function that returns an array
const getName = ((name) => {
  const nameSplit = name.split(" ")
  return [nameSplit[0], nameSplit[1]]
})

function App() {
  // Going to start this value at whatever is stored in localStorage at the key 'books' 
  // or 0 if there is nothing in localStorage 
  const [books, setBooks] = useState(parseInt(localStorage.getItem("books") ?? 0))
  // This state is in order to control the input value
  const [inputValue, setInputValue] = useState();
  // Here we are destructuring the array returned by getName
  const [firstName, lastName] = getName("Rebekah Callari");

  // This will run on initial render and anytime books changes
  useEffect(() => {
    localStorage.setItem("books", books)
  }, [books])

  // This is a handler function to add one to books
  const handleClickAddBooks = () => {
    setBooks(books + 1)
  };

  // This is a handler function to subtract one from books
  const handleClickSubtractBooks = () => {
    setBooks(books - 1)
  };


  return (
    <>
      <h3>{`Owner: ${lastName ?? "-"}, ${firstName ?? "-"}`}</h3>
      <h3>Total Number of Books: </h3>
      <h3>{books}</h3>
      {/* These two buttons both update books */}
      <div className="card">
        <Button title={"Add 1 book"} handleClick={handleClickAddBooks}/>
        <Button title={"Subtract 1 book"} handleClick={handleClickSubtractBooks}/>
      </div>
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
