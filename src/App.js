import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      {/* <Routes>
        <Route path='/' element={<Sidebar />}/>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
