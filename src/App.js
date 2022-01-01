import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import About from './Components/Home/About/About';
import NotFound from './Components/Home/NotFound/NotFound';
import Products from './Components/Home/Details/Products/Products';
import Login from './Components/Login/Login/Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            {/* <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute> */}

            <Route path="/products">
              <Products></Products>
            </Route>




            {/* <PrivateRoute exact path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route exact path="/addClients">
              <AddClients></AddClients>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <Route exact path="/addClients">
              <AddClients></AddClients>
            </Route>
            <PrivateRoute exact path="/manageServices/:serviceKey">
              <ManageServices></ManageServices>
            </PrivateRoute> */}


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
