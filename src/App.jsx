import './App.css';
import Admin from './modules/private/admin/Admin';
import Login from './modules/private/login/Login';
import Signup from './modules/private/signup/Signup';
import Home from './modules/public/page/home/Home';

function App() {
  return (
    <div className="app">
      {/* <Home/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      <Admin/>
      </div>
  );
}

export default App;
