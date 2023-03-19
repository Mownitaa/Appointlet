import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Services from './Pages/Home/Services/Services';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Navigation></Navigation>
     <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route exact path="/home"> 
        <Home></Home>
      </Route>
      <Route exact path="/login"> 
        <Login></Login>
      </Route>
      <Route exact path="/register"> 
        <Register></Register>
      </Route>
      <Route exact path="/services"> 
        <Services></Services>
      </Route>
      <PrivateRoute exact path="/appointment"> 
        <Appointment></Appointment>
      </PrivateRoute>
      {/* <Route exact path="/about"> 
        <About></About>
      </Route> */}
      {/* <Route exact path="/contact"> 
        <Appointment></Appointment>
      </Route> */}
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
