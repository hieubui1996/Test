import React from 'react'
import Product from '../product/Product'

export default function Counter(props) {
    const handleClick = () => {
        console.log("Clicked!")
    }


  return (
    <div>
        <button onClick={handleClick}>Click Me!</button>
        {props.children}
        {props.name} - {props.age}
        <Product></Product>
    </div>
  )
}
