import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
function App() {
  return (
    <>
      <Home />
      <Routes>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>

  );
}

export default App;
