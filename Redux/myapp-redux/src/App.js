
import './App.css';
import {increment,decrement} from './Redux/action'
import{useSelector,useDispatch} from 'react-redux'

function App() {

  const count=useSelector(state=>state.count)
  const dispatch=useDispatch()

  return (
    <>

    <h1>Counter App</h1>
    <h1>Count : {count}</h1>
    {
      console.log((increment()))
    }
    <button onClick={()=>{dispatch(increment())}}>+</button>
    <button onClick={()=>{dispatch(decrement())}}>-</button>

    </>
  );
}

export default App;
