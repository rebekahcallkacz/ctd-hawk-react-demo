import { useState } from 'react'
// props is what you're passing to the button from the parent component (in this case App)
// The component will automatically re-render anytime props changes
//////// props //////////
// title (string): will show up as the first part of the button title
// showCountNotification (boolean): if true, displays text when the button has been clicked more than 2 times
function Button(props) {
  // useState allows you to manage state within your app
  // in this case we are keeping tracking of the button count
  // you destructure what's returned by useState as [state, setState]
  // the first item is where the value is stored
  // the second is how you update that stored value
  // you can set an initial value (so what is there on initial render) in the parenthesis of useState()
  // in this case, it's set to 0
    const [count, setCount] = useState(0)
    console.log("the props are here: ", props)
    // This function handles what happens when the button is clicked
    const onHandleButtonClick = () => {
      setCount((count) => count + 1)
    }

    // This is the JSX that the component returns
    // This will be translated to HTML and rendered on the page
    return (
      // Can only return one html element per React component
        <>
        {/* Pass the handler function to the button so that the count is updated onClick */}
        <button onClick={onHandleButtonClick}>
          {/* Pass the title inherited from the parent - will not display if this is not passed from parent*/}
          {props.title} count is {count}
        </button>
        {/* Going to conditionally render this statement - only show if count > 2 - will update as the count does*/}
        {count > 2 && props.showCountNotification && <h3>The count is greater than 2!</h3>}
        </>
    )
}

export default Button