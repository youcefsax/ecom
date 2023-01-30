import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.components";
import Nav from "./components/category/Navigation/Nav";
import SignIn from "./routes/sign-in/signin.components";
const Shop=()=>{
  return(
    <h1>nav</h1>
  )
}
 

const App=()=> {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="shope" element={<Shop />} />
          <Route path="sign" element={<SignIn />} />
        </Route>
      </Routes>
       
    </div>
  );
}

export default App;
