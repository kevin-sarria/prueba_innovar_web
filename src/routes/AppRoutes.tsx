import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routesPublic } from "./";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesPublic.map(({ path, Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
