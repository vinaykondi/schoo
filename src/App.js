import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './component/contact/contact';
import Home from './component/home/Home';
import About from './component/pages/About';
import Ourschool from './component/pages/Ourschool';
function App() {
  return (
    <div className="App">
   <Routes>
   <Route path="/" element={<Home />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/about" element={<About />}/>
<Route path="/ourschool" element={<Ourschool />}/>
</Routes>
    </div>
  );
}

export default App;
