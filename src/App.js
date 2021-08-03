import './App.css';
import {useState, useEffect} from 'react'
import ContentContainer from './ContentContainer';
import data from './data';
function App() {
  const [mode, setMode] = useState("Light-Theme");
  
  useEffect(() => {
    document.documentElement.className =mode;
  },[mode]);
  const changeTheMode = () =>{
    if(mode === "Light-Theme"){
      setMode("Dark-Theme");
    }
    else {
      setMode("Light-Theme");
    }
  }
  return (
    <div className="App">
    <div className ="Header">
    <h1>The Coding Blogs</h1>
    <button className={mode==="Light-Theme"? "btn-light" : "btn-dark"} onClick={changeTheMode}>Switched: {mode}</button>
    </div>  
      
      {data.map((blogData)=>{
        return <ContentContainer key ={blogData.id} mode={mode} {...blogData}/>
      })}
    </div>
  );
}

export default App;
