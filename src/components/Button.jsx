import {memo} from 'react'

const Button = ({handlerFunction}) => {
    console.log("I am Button");

    return (
        <button onClick={handlerFunction}>Increase</button>
    )
}
// [] === []
export default memo(Button)