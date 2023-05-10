import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import { ABOUT, CONTACT, HOME, MODELS, TEAM, TESTIMONIALS } from "./utils/consts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={MODELS} element={<Models />} />
        <Route path={TESTIMONIALS} element={<TestimonialsPage />} />
        <Route path={TEAM} element={<Team />} />
        <Route path={CONTACT} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
