import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainSegment from './components/MainSegment/MainSegment';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainSegment />
      {/* <Routes>
        <Route path='/' element={<MainSegment />}/>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
