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
import { MakeAdmin } from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';

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
      <Route path="/home"> 
        <Home></Home>
      </Route>
      <Route path="/services"> 
        <Services></Services>
      </Route>
      <PrivateRoute path="/appointment"> 
        <Appointment></Appointment>
      </PrivateRoute>
      <Route path="/login"> 
        <Login></Login>
      </Route>
      <Route path="/register"> 
        <Register></Register>
      </Route>
      <PrivateRoute path="/dashboard"> 
        <Dashboard></Dashboard>
      </PrivateRoute>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
