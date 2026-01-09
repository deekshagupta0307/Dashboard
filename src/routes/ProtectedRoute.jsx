import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const isAuthenticated = auth?.isAuthenticated; // safety check

  if (!children) return null; // prevent crash if children missing

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
