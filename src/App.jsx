
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Inputs from "./Inputs.jsx";
import Button from "./Button.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="container">

      <Sidebar />

      <div className="form-content">
        <Header />
        <Inputs />
        <Button />
      </div>

    </div>
  );
}

