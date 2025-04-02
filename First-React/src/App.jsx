import './App.css'
import Title from "./Title.jsx";
// import {Title} from "./Title.jsx";


function Description(){
  return <h3>It is the Discription</h3>
}

function App() {

  return( 
    <div>
      <h1>This is my app component</h1>
      <p>inside app component : </p>
      <Title/>
      <Description/>
      <Title/>
      <Description/>
    </div>
  );
}

export default App
