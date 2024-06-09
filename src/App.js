import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import SearchStudent from './component/SearchStudent';
import ViewStudent from './component/ViewStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddStudent/>}/>
      <Route path='/search'element={<SearchStudent/>}/>
      <Route path='/ViewStudent'element={<ViewStudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
