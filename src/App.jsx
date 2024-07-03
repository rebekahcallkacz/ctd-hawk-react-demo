import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

const buttonData = [
  { title: "Save", showCountNotification: true, id: 1 },
  { title: "Cancel", showCountNotification: false, id: 2 },
];

// This is the parent component of Button because it renders Button
function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* These components are children of App because they are rendered by App */}
        {/* Loops through objects in array - for each object, render a button component */}
        {buttonData.map((buttonDatum) => <Button key={buttonDatum.id} title={buttonDatum.title} showCountNotification={buttonDatum.showCountNotification}/>)}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
