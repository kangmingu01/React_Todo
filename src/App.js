import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import Main from "./Main";
function App() {
  return (
    <DarkModeProvider>
      <div className="bg-slate-600 w-screen h-screen flex justify-center items-center">
        <div className="w-[512px] h-[512px] bg-white dark:bg-gray-500 rounded-3xl px-8 flex flex-col justify-between overflow-hidden">
          <Main />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
