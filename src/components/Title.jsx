import {memo} from 'react'

const Title = () => {
    console.log("I am Title");
    return (
        <h2>Our Counter Apps</h2>
    )
}

export default memo(Title)