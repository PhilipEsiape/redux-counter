import './App.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { increaseCount,decreaseCount,resetCount } from './redux/action/counterAction';


function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increaseCount() )
  }

  const decrement = () => {
    dispatch(decreaseCount() )
  }

  const reset = () => {
    dispatch(resetCount() )
  }

  return (
    <div className="App">
      <h1 className='app-heading'>COUNTER APP</h1>
      <idv className='btn-div'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </idv>
      <h1 className='app-count'>{count}</h1>
    </div>
  );
}

export default App;
