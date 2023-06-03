import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./Components";
import { Community, Home } from "./Pages";

function App() {
  return (
    <div
      className="App min-h-screen bg-white"
      // style={{ backgroundColor: "#f6f8ff" }}
    >
      {" "}
      <Header />
      {/* <div className="h-8/12  bg-pink-100"> backgroundColor</div> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/community" element={<Community/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
