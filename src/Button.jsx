import { useState } from 'react'
function Button(props) {
    const [count, setCount] = useState(0)
    return (
        <>
        <button onClick={() => setCount((count) => count + 1)}>
          {props.title} count is {count}
        </button>
        {count > 2 && <h3>The count is greater than 2!</h3>}
        </>
    )
}

export default Button