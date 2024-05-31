import { useEffect } from "react";

function App() {

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( res => res.json())
    .then( data => console.log(data))
    
  },[])
  return (
    <div className="App">
      
        
        
    </div>
  );
}

export default App;