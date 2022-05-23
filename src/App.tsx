import { Button } from "./components";
import "./index.css";
import { Sidebar } from "./Sidebar";
import "./styles/globals.css";

export const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Sidebar />

      <div>
        <h4>fitcoin</h4>
      </div>
    </div>
  );
};

export default App;
