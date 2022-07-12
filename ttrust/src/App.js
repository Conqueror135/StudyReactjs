import {Routes, Route} from "react-router-dom";
import Login from "./app/pages/auth/Login";
import Home from "./app/pages/Home/Home";
import 'antd/dist/antd.css';
import Register from "./app/pages/auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
