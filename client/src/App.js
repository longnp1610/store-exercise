import Banner from "./components/Banner/Banner";
import Featured from "./components/Featured/Featured";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="lg:px-24 w-full h-auto overflow-hidden">
        <Banner />
        <Featured />
      </div>
    </div>
  );
}

export default App;
