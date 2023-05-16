import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const isAuthed = token ? true : false;
  return <>{isAuthed ? <Outlet /> : <Navigate to="/mainPage" />};</>;
};

export default ProtectedRoute;
