import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Resume from './pages/Resume/Resume';
import './styles/App.css';

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
