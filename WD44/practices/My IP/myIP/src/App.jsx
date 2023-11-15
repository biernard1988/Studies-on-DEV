import "./App.css";
import Map from "./components/Map";
import IP from "./components/IP";
import Flag from "./components/Flag";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="body bg-secondary d-flex justify-content-center">
        <div className="container bg-dark text-light d-flex flex-column justify-content-center align-items-center gap-5 rounded shadow-lg p-5 my-5 w-50">
          <IP />
          <Flag />
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
