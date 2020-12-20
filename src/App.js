import { useSelector, useDispatch } from "react-redux";
import {increment} from './actions';
import {decrement} from './actions';
function App() {
  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React Redux</h1>
      <h1>Counter {counter}</h1>
      <button onClick = {() => dispatch(increment(5))}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
