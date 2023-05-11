import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../src/components/Navbar";
import { HOME } from "./utils/consts";
import routes from "./routes";
import "../src/dist/styles.css";


function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="*" element={<Navigate to={HOME} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

