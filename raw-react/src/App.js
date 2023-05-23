import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import CompoentWithDataFetching from './components/CompoentWithDataFetching';
import Posts from './components/Post';

function App() {
  return (
    <div className="App">
        <h2>hello React</h2>
        <CompoentWithDataFetching url={`https://jsonplaceholder.typicode.com/todos?_limit=5`}>
          {(isLoading, data, errorMessage) => (
            <Todos isLoading={isLoading} data={data} errorMessage={errorMessage}/>
          )}
        </CompoentWithDataFetching>

        <CompoentWithDataFetching url={`https://jsonplaceholder.typicode.com/posts?_limit=5`}>
          {(isLoading, data, errorMessage) => (
            <Posts isLoading={isLoading} data={data} errorMessage={errorMessage}/>
          )}
        </CompoentWithDataFetching>
    </div>
  );
}

export default App;
