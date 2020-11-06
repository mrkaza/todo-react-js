import Navbar from './modules/navbar/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Error from './pages/Error';
import TodoDetails from './modules/todo/components/TodoDetails'
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/todo/:id" component={TodoDetails} />
        <Route component={Error} />
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
