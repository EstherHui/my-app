import './App.css';
import ErrorBoundary from './component/ErrorBoundary';
// import Form from './component/Form'
import Hero from './component/Hero';
// import ParentComp from './component/ParentComp';
// import PortalDemo from './component/PortalDemo';
// import PureComp from './component/PureComp';

function App() {
  return (
    <div className="App">

      {/* <Form /> */}
      {/* <ParentComp /> */}
      {/* <PortalDemo /> */}
      
     <ErrorBoundary>
       <Hero heroName = "Batman"/>
      </ErrorBoundary>

      <ErrorBoundary>
       <Hero heroName = "IronMan"/>
      </ErrorBoundary>
      
     <ErrorBoundary>
       <Hero heroName = "Joker"/>
     </ErrorBoundary>

    </div>
  );
}

export default App;
