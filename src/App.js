import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Menu from "./pages/Menu";
import NavBar from "./component/NavBar";
import SecondMenu from "./pages/SecondMenu";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Test } from "./pages/Test";
import { FunctionTask } from "./pages/FunctionTask";
import { ArrayTask } from "./pages/ArrayTask";

function App() {
  const onLoading = () => {
    alert("ushbu sahifa yangilanmoqda")
}
  return (
     <BrowserRouter>
      <NavBar/>
        <div style={{height:'250vh'}} onLoad={()=>onLoading()}>
          <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/second" element={<SecondMenu/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/task" element={<FunctionTask/>}/>
            <Route path="/array" element={<ArrayTask/>}/>
          </Routes>
        </div>
        <Footer/>
     </BrowserRouter>
  );
}

export default App;
