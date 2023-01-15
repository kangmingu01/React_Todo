import "./App.css";
import Main from "./Main";
function App() {
  return (
    <div className="bg-slate-600 w-screen h-screen flex justify-center items-center">
      <div className="w-[512px] h-[512px] bg-white rounded-3xl px-8 flex flex-col justify-between overflow-hidden">
        <Main />
      </div>
    </div>
  );
}

export default App;
