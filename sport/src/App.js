import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LateralBar from './components/LateralBar';
import UsersPage from './pages/UsersPage';
import Error404 from './pages/Error404';

function App() {
  return (
        <div>
          <Router>
            <Header />
              <main>
                <LateralBar />
                  <Routes>
                    <Route path="/" element={<UsersPage/>} />
                    <Route path="/user/:id" element={<Dashboard />} /> 
                    <Route path="*" element={<Error404 />} /> 
                  </Routes>  
              </main>            
          </Router>
        </div>
        
      );
}

export default App;
