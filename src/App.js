import {useReducer} from 'react';
import './index.css';
const initialstate={
  count :0
}
const reducer=(state,action)=>{
  switch (action.type) {
    case 'plusOne':
      return{
        count: state.count+1
      }
      case 'minusOne':
        return{count: state.count-1}
        case 'reset':
          return {count: 0}
    default: return {state} 
  }
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  return(
    <>
   <div className="container">
   <h2>{state.count}</h2>
   <button onClick={()=>dispatch({type:'plusOne'})}>plusOne</button>
   <button onClick={()=>dispatch({type:'minusOne'})}>Minus</button>
   <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
   </div>

</>
)
}
export default App;
