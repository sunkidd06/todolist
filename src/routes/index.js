import { SITE_MAP } from "../constants/Path";
import { Route, Routes } from "react-router-dom";
import { Home } from '../components/Home';
import { NewTask } from "../feature/NewTask";
import { CreateTodo } from "../feature/CreateTodo";
import { DoingTask } from "../feature/DoingTask";
import { DoneTask } from "../feature/DoneTask";


const MainRoute = () => {
    return (
        <Routes>
            <Route path={SITE_MAP.INDEX} element={<Home />}></Route>
            <Route path={SITE_MAP.CREATE_TODO} element={<CreateTodo />}></Route>
            <Route path={SITE_MAP.HOME} element={<Home />}>
            </Route>
            {/* <Route path="/todos/:id" element={<DetailTodo />}>
            </Route> */}
            <Route path={SITE_MAP.NEW_TASK} element={<NewTask />}></Route>
            <Route path={SITE_MAP.DOING_TASK} element={<DoingTask />}></Route>
            <Route path={SITE_MAP.DONE_TASK} element={<DoneTask />}></Route>
        </Routes>
    )
}
export default MainRoute;