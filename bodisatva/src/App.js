import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <h1>Bodisatva</h1>
      <div>
       <Router>
         <Routes>
           <Route exact path='/' element={<Home />}></Route>
         </Routes>
       </Router>

      </div>
    </div>
  );
}

export default App;
