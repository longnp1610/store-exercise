import Banner from "./components/Banner/Banner";
import Featured from "./components/Featured/Featured";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="lg:px-24 w-full h-auto">
        <Banner />
        <Featured />
        <About />
      </div>
    </>
  );
}

export default App;
