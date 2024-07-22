import { Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useAuthContext } from "../../hooks/useAuthContext";

function DoctoreProtected({ children }) {
  const { user } = useAuthContext();
  if (user === null) {
    return (
      <div className="loading-container w-full h-screen flex justify-center items-center fixed z-[1] bg-white bg-opacity-90">
        <HashLoader color="#1D3557" />
      </div>
    );
  }

  if (user === false) {
    return <Navigate to="/login" replace />;
  } else if (user && user.doctor) {
    return <>{children}</>;
  } else {
    if (user.admin) return <Navigate to="/admin-panel" replace />;
    else if (user.user) return <Navigate to="/" replace />;
  }
}

export default DoctoreProtected;
