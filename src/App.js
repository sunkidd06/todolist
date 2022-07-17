import { Route, Routes } from "react-router-dom";
import './sass/index.css';
import { Home } from './components/Home/Home';
import { AddNewTodo } from "./feature/AddNewTodo";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/todos" element={<Home />}></Route>
        <Route path="/newtask" element={<AddNewTodo />}></Route>
      </Routes>
    </>

  );
}

export default App;
