import "./App.css";
import ImageContainer from "./Component/ImageContainer";
import { Routes, Route } from "react-router-dom";
import WeatherContainer from "./Component/WeatherContainer";
import HomeContainer from "./Component/HomeContainer";
import SideBar from "./Bar/SideBar";
import NavBar from "./Bar/NavBar";
import ExtraContainer from "./Component/ExtraContainer";
import InfiniteScrollImage from "./Component/InfiniteScrollImage";
import InputContainer from "./Component/InputContainer";
import QuizContainer from "./Component/QuizContainer";

function App() {
  return (
    <>
      <div className="App-container">
        <NavBar />
        <SideBar />
        <div className="route-container">
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/image-carousel" element={<ImageContainer />}></Route>
            <Route path="/weather" element={<WeatherContainer />}></Route>
            <Route path="/counter" element={<ExtraContainer />}></Route>
            <Route
              path="/infinite-scroll"
              element={<InfiniteScrollImage />}
            ></Route>
            <Route path="/input-tag" element={<InputContainer />}></Route>
            <Route path="/quiz" element={<QuizContainer />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
