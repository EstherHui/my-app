import './App.css';
import FunctionClick from './components/FunctionClick';
import {Greet} from './components/Greet';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Test } from './components/Test';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/styleSheet.css'
import styles from './components/styleSheet.module.css'

function App() {

  const demo = {
    name : 'Lucky',
    messageCount : 7,
    isLoggedIn : true ,
  }

  const personName =
   {
    first:'Good',
    last: 'Bai',
  } //contain the data if data change direct modify here enough

  const arrayName = [
  {
    first : 'Esther',
    last : 'Yu',
  },
  {
    first : 'Lucky',
    last : 'Hui',
  },
  {
    first : 'Good Job',
    last : 'Pang',
  }]//create array call "arrayName"

  return (
    <div className="App">
      
      <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Congrate</h2>
      <Inline />
      {/* <Stylesheet primary={true} font_xl={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <Greet name= {demo.name} messageCount= {demo.messageCount} isLoggedIn= {demo.isLoggedIn} />   */}
      {/* <Test name = 'Richer'/>
      <Test name = 'Beauty'/> */}
      {/* <Person name = {personName}/>   
      <PersonList names = {arrayName}/> */}
      {/* <FunctionClick /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}
//use true means user is logged in message display if false means not logged in
export default App;
