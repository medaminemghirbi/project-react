
import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Index from './Components/Index/Index'
function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
