import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LateralBar from './components/LateralBar';
import UsersPage from './pages/UsersPage';

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
                  </Routes> 
              </main>  
          </Router>
        </div>
        
      );
}

export default App;
