nimport React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CareerQuizPage from './pages/CareerQuizPage';
import ResultsPage from './pages/ResultsPage';
import InsightsPage from './pages/InsightsPage';
import ChatbotPage from './pages/ChatbotPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/career-quiz" element={<CareerQuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/chat" element={<ChatbotPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;