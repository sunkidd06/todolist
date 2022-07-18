import { Route, Routes } from "react-router-dom";
import './sass/index.css';
import { Home } from './components/Home/Home';
import { NewTask } from "./feature/NewTask";
import { CreateTodo } from "./feature/CreateTodo";
import { DoingTask } from "./feature/DoingTask";
import { DoneTask } from "./feature/DoneTask";
import { DetailTodo } from "./feature/DetailTodo";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/todo" element={<CreateTodo />}></Route>
        <Route path="/todos" element={<Home />}>
        </Route>
        <Route path="/todos/:id" element={<DetailTodo />}>
        </Route>
        <Route path="/newtask" element={<NewTask />}></Route>
        <Route path="/doingtask" element={<DoingTask />}></Route>
        <Route path="/donetask" element={<DoneTask />}></Route>

      </Routes>
    </>

  );
}

export default App;
