import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import ResultPage from "./Components/Result";
import DetailForm from "./Components/DetailForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/details" element ={<DetailForm />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default App;
