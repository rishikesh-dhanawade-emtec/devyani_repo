import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';
import Register from './components/Register';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Counter />
      <StarRating />
    </div>
  );
}

export default App;
