import { useLocation, Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

import { useAuthContext } from "../../hooks/useAuthContext";

const AuthGuard = ({ children }) => {
  const { user } = useAuthContext();

  if (user === null)
    return (
      <div className="loading-container w-full h-screen flex justify-center items-center fixed z-[1] bg-white bg-opacity-90">
        <HashLoader color="#1D3557" />
      </div>
    );

  if (user) {
    if (user.admin) return <Navigate to="/admin-panel" replace />;
    else if (user.doctor) return <Navigate to="/doctor-panel" replace />;
    else return <Navigate to="/" replace />;
  } else {
    return <>{children}</>;
  }
};

export default AuthGuard;
