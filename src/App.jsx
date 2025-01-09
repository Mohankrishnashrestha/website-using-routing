import Nav from "./Nav";
import "./App.css"
import Content from "./Content";
import { useState } from "react";
import Footer from "./Footer";
function App() {
  const [content, setContent]=useState("Home");
  return (
    <div>
      <Nav setContent={setContent} />
      <Content content={content}/>
      <Footer setContent={setContent}/>
    </div>
  );
}

export default App;
