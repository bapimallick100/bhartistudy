import "./index.css"
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Content from "./admin/components/Content";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" index element={<Home/>} />  
    <Route  path='/post' element={<Content/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;