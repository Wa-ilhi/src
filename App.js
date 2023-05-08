import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Logout from "./components/Logout";
import { Protect } from "./help";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Protect Component={Homepage}/>} />
        <Route path= "/login" element = {<Login/>} />
        <Route path= "/logout" element = {<Logout/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;


  
