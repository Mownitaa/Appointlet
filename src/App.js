import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Services from './Pages/Home/Services/Services';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navigation></Navigation>
     <Switch>
      <Route exact path="/">
<Home></Home>
      </Route>
      <Route exact path="/home"> 
        <Home></Home>
      </Route>
      <Route exact path="/services"> 
        <Services></Services>
      </Route>
      <Route exact path="/appointment"> 
        <Appointment></Appointment>
      </Route>
      <Route exact path="/about"> 
        <Appointment></Appointment>
      </Route>
      <Route exact path="/contact"> 
        <Appointment></Appointment>
      </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
