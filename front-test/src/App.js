import './App.css';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
 