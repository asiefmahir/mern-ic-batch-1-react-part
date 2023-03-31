import { useCounter } from '../hooks/useCounter'

const Counter = () => {

    const {counter, increaseHandler, decreaseHandler} = useCounter(100)

    // const [counter, setCounter] = useState(0);

    // const increaseHandler = (payload) => {
    //     setCounter((prevState) => prevState + payload)
    // }

    // const decreaseHandler = (payload) => {
    //     setCounter((prevState) => prevState - payload)
    // }

  return (
    <div>
        <p>The value of the counter is {counter}</p>
        <button onClick={() => increaseHandler(1)}>Increase By 1</button>
        <button onClick={() => decreaseHandler(1)}>Decrease By 1</button>

    </div>
  )
}

export default Counter