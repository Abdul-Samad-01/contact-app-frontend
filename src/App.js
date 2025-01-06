import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="app">
    {/* Navbar */}
    <Navbar />

    <div className="app-body">
      {/* Sidebar/Menu Bar */}
      <Sidebar />

      {/* Main Section */}
      <MainSection />
    </div>
  </div>
  );
}

export default App;
