import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import useAuthLoginCheck from "./hooks/useAuthLoginCheck";
import ApplicationLoading from "./components/UI/ApplicationLoading";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLayout from "./components/layout/AdminLayout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // check user loggedIn or not
  const LoggedIn = useAuthLoginCheck();
  return (
    <>
      {!LoggedIn ? (
        <ApplicationLoading />
      ) : (
        <Routes>
          <Route
            index
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
