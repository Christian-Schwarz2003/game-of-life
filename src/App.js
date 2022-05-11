import Field from './Field.js';
import logo from './logo.svg';
import TimeControls from './TimeControls';

function App() {

  const action=()=>{
    console.log("check");
    console.log("move");
  };
  return (
    <div>
        <div>
        <TimeControls step={action}></TimeControls>
        </div>
        <div>
          <Field></Field>
        </div>
    </div>
  );
}

export default App;
