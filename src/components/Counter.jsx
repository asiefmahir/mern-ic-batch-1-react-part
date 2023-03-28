import {memo} from 'react'


const Counter = ({value}) => {
    console.log("I am Counter");

  return (
    <p>The value of the Counter is {value}</p>
  )
}

export default memo(Counter)