// import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/dashboard/login";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/dashnow" component={Dashboard} />
    //     <Route path="/lognow" component={Login} />
    //   </Switch>
    // </Router>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashnow" element={<Dashboard />} />
          <Route path="lognow" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
