import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Header title = "TodoList"/>
      <TodoList/>
    </div>
  );
}

export default App;
