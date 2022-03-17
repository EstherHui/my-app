import './App.css';
import {Greet} from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

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
      <Greet name= {demo.name} messageCount= {demo.messageCount} isLoggedIn= {demo.isLoggedIn} />   
      <Person name = {personName}/>   
      <PersonList names = {arrayName}/>
    </div>
  );
}
//use true means user is logged in message display if false means not logged in
export default App;
