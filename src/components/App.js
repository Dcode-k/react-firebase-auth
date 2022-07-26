import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    
  <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{
        minWidth: "400px",
      }}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </Router>
          </AuthProvider>
     </div>
     </Container>
   
  
  
  );
}

export default App;
