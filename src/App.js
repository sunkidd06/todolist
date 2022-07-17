import { Route, Routes } from "react-router-dom";
import './sass/index.css';
import { Home } from './components/Home/Home';
function App() {
  return (
    <>
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
    </>

  );
}

export default App;
