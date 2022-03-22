import './App.css';
import FunctionClick from './components/FunctionClick';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import { Person } from './components/Person.js';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/styleSheet.css'
import styles from './components/styleSheet.module.css'

function App() {


  return (
    <div className="App">
      
      {/* <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Congrate</h2>
      <Inline /> */}
      {/* <Stylesheet primary={true} font_xl={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <FunctionClick /> */}
      {/* <ParentComponent /> */}
      {/* <Person name = {personName}/> */}
    </div>
  );
}
//use true means user is logged in message display if false means not logged in
export default App;
