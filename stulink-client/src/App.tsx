import "./App.scss";
import { images } from "./images";

function App() {
  return (
    <div className="App">
      <h1>
        Stu
        <span>link</span>
      </h1>
      <p>This is just a test, clear all this shit out</p>
      <img src={images(710, 600, false, 16)} alt="" />
      <img src={images(710, 600, false, 12)} alt="" />
      <img src={images(1420, 600, false, 49)} alt="" />
    </div>
  );
}

export default App;
