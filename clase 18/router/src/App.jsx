import "./App.css";
import { Routes, Route, NavLink as NavLinkRR } from "react-router-dom";
import {Home, Detail, Other} from "./components";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
// import Detail from "./components/Detail";
// import Home from "./components/Home";
// import Other from "./components/Other";

const NavLink = ({to, children, ...props}) => {
  return(
    <NavLinkRR {...props} className={({isActive}) => {
      return isActive ? "is-active" : "not-active"
    }} to={to}>
      {children}
    </NavLinkRR>
  )
}

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink className={({isActive}) => {
                return isActive ? "is-active" : undefined
              }} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/other">other</NavLink>
            </li>
            {/* <li>
              <NavLink to="/detail">detail</NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<Detail />} />
        {/* <Route path="/other" element={<Other />} /> */}
        <Route path="/other" element={<Other />} >
              <Route path="content1" element={<Content1 />} />
              <Route path="content2" element={<Content2 />} />
              <Route path="content3" element={<Content3 />} />
        </Route>
        <Route path="*" element={<h1>Not found - 404 :(</h1>} />
      </Routes>
    </>
  );
}

export default App;
