import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Description from "./components/Description";
import Profile from "./components/Profile";


function App() {
  return (

        <div className="App">
            <Nav/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route  path={"/about"} element={<About/>}/>
                <Route  path={":id"} element={<Product/>}>
                    <Route path={"product"} element={<Description/>}/>
                    <Route index element={<Profile/>}/>
                </Route>
            </Routes>

        </div>

  );
}

export default App;
