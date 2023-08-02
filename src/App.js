// import Navbar from "./components/Navbar";
import About from "../src/pages/About";
import sol from "../src/images/sol.png";

function App() {
  return (
    <div className="flex flex-col mx-96 my-20">
      <img
        className="absolute w-2/5 right-10 z-0 top-5"
        src={sol}
        alt="solillustrasjon"
      ></img>
      <img
        className="absolute w-1/5 left-20 z-0 bottom-10"
        src={sol}
        alt="solillustrasjon"
      ></img>
      <About />
    </div>
  );
}

export default App;
