import {useEffect} from 'react'
import {Link} from 'react-router-dom'


const About = () => {

  useEffect(() => {
        console.log("About mounted");
        return () => {
            console.log("About unmounted");
        }
    }, [])
  return (
    <>
      <div>hello I am About</div>
      <Link to='/'>Go to Home</Link>
    </>
  )
}

export default About