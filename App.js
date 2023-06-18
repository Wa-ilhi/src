import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Logout from "./components/Logout";
import { Protect } from "./help";
import { ToastContainer } from "react-toastify";
import Registration from "./components/Registration";
import RecipeInfo from "./components/Homepage/RecipeInfo";

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Protect Component={Homepage}/>} />
        <Route path = "/:recipeId" element = {<RecipeInfo/>}/>
        <Route path= "/login" element = {<Login/>} />
        <Route path= "/logout" element = {<Logout/>} />
        <Route path= "/register" element = {<Registration/>} />
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}
export default App;


  
