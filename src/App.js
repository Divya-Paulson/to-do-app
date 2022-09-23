import Todo from './ui/pages/todo';
import Layout from './ui/layout/desktop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Todo></Todo>
      </Layout>

    </div>
  );
}

export default App;
