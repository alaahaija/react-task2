import { useState } from "react";

function App(){
  

let [count,setcount] = useState(0);
let ghange=()=>{
  setcount(count+1);
   
}
return(
<>


<h2>ALAA COUNTER</h2>
<div className="main">
  
     
    
     <button onClick={ghange}>Alaa :  {count}</button>
     </div>
  </>
  
    
   
);
}
export default App;