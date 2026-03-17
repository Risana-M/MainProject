import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo || userInfo.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;