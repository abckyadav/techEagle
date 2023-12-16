import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./routes";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-3xl text-center font-bold">
          Tech Eagle Assignment
        </h1>
        <Routes />
      </div>
    </>
  );
}

export default App;
