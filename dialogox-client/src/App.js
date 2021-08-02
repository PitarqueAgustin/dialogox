//Styles
import './css/app.css';


//Routes
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';

import { createHashHistory } from 'history';

//Pages
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import AddPublication from './pages/add-publication';
import Profile from './pages/profile';
import Notifications from './pages/notifications';

function App() {

  const history = createHashHistory()
	
  return (
    <Router history={history}>
		<HashRouter>
			<Switch>
				<Route path='/notifications'>
					<Notifications />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/add-publication">
					<AddPublication />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route exact path='/'>
					<Login />
				</Route>
			</Switch>
		</HashRouter>
	</Router>
  );
}

export default App;
