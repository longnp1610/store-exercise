import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="lg:px-24 w-full h-auto overflow-hidden">
        <Banner />
      </div>
    </div>
  );
}

export default App;
