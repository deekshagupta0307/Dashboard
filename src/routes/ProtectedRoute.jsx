import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const isAuthenticated = auth?.isAuthenticated; 

  if (!children) return null; 

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
