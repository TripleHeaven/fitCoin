import { Button } from "./components";
import "./index.css";
import "./styles/globals.css";

export const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-[72px] flex items-center">
        <img src="./icons/fitCoin.svg" alt="fitCoin" />
        <Button>revolution</Button>
        <Button>token</Button>
        <Button>community</Button>
        <Button>about</Button>
      </div>
    </div>
  );
};

export default App;
