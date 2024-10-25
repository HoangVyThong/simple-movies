import "./index.scss";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
