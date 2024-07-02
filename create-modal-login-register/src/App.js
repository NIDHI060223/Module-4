import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './Login';
import Registration from './Registration.js';


function App() {
  return (
    <div className="App">
      <Login/>
      <Registration/>
    </div>
  );
}

export default App;
