import logo from './logo.svg';
import TimeControls from './TimeControls';

function App() {

  const action=()=>{
    console.log("check");
    console.log("move");
  };
  return (
    <div>
        <TimeControls step={action}></TimeControls>
    </div>
  );
}

export default App;
