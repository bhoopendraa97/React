import { useContext } from "react";
import { myContext } from "./CounterContext";
const MyCounter=()=>{
   const  {cnt, setCnt}=useContext(myContext);
   return (
   <>
    <h1>my counter App</h1>
     <button onClick={()=>{setCnt(cnt+1)}}>increment</button>
      <h1>{cnt}</h1>
      <button onClick={()=>{setCnt(cnt-1)}}>Decrement</button>
   </>
   )
}
export default MyCounter;