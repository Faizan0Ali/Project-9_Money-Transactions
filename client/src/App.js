
import './App.css';
import { Route, Routes, } from "react-router-dom";
import PostMoney from './components/PostMoney';
import GetAllRecords from './components/GetAllRecords';

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" exact element={<PostMoney />} />
        <Route path="/getAllRecords" exact element={<GetAllRecords/>} />
      </Routes>
    </>
  );
}

export default App;
