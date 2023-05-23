import Nav from "@/components/Nav";
import { useRouter } from "next/router";

const Notes = ({data}) => {
    const router = useRouter()
    const deleteHandler = async (id) => {
        await fetch(`http://localhost:4000/notes/${id}`, {
            method: "DELETE"
        })
        router.push('/notes')

        
    }
  return (
    <>
        <Nav />
        <ul>
            {data?.map(item => (
                <li key={item.id}>
                    <span>{item.title}</span>
                    <button onClick={() => deleteHandler(item.id)}>Delete Note</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export async function getServerSideProps() {
    console.log("I am server side props");
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/notes`);
  const data = await res.json();
 
  // Pass data to the page via props
  return { props: { data } };
}


export default Notes