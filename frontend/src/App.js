import "./App.css";
import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./components/register/register";
import Home from "./components/main";
import About from "./components/About/about";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
/*
In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

import { Switch, Route } from "react-router-dom";
to

import { Routes ,Route } from 'react-router-dom';
You also need to update the Route declaration from

<Route path="/" component={Home} />
to

<Route path='/welcome' element={<Home/>} />
*/
