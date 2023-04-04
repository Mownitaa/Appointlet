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
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Navigation></Navigation>
     <Switch>
      <Route exact={true} path="/">
      <Home></Home>
      </Route>
      <Route exact={true} path="/home"> 
        <Home></Home>
      </Route>
      <Route exact={true} path="/services"> 
        <Services></Services>
      </Route>
      <PrivateRoute exact={true} path="/appointment"> 
        <Appointment></Appointment>
      </PrivateRoute>
      <Route exact={true} path="/login"> 
        <Login></Login>
      </Route>
      <Route exact={true} path="/register"> 
        <Register></Register>
      </Route>
      <PrivateRoute exact={true} path="/dashboard"> 
        <Dashboard></Dashboard>
      </PrivateRoute>
      {/* <Route exact="true" path="/about"> 
        <About></About>
      </Route> */}
      {/* <Route exact="true" path="/contact"> 
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
