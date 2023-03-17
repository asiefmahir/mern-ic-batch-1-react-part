import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log("Home mounted");
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setIsLoading(false)
            })
        return () => {
            console.log("Home unmounted");
        }
    }, [])
  return (
    <>
        <div>hello I am home</div>
        <Link to='/about'>Go to About</Link>
        {isLoading && <h1>Loading........</h1>}
        <ul>
            {posts.map(item => (
                <li key={item.id}>
                    <Link to={`/posts/${item.id}`}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Home