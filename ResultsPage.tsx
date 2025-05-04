import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Download, Share2 } from 'lucide-react';
import CareerMatchCard from '../components/results/CareerMatchCard';
import SkillsRadarChart from '../components/results/SkillsRadarChart';
import { mockCareerMatches } from '../data/mockResults';

const ResultsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [careerMatches, setCareerMatches] = useState([]);
  
  useEffect(() => {
    // Simulate API call to get personalized results
    const timer = setTimeout(() => {
      setCareerMatches(mockCareerMatches);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="pt-20 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
          <h2 className="text-2xl font-semibold mb-2">Analyzing Your Responses</h2>
          <p className="text-gray-600">Our AI is generating your personalized career recommendations...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
            <div className="flex items-center mb-4">
              <CheckCircle size={32} className="mr-3" />
              <h1 className="text-3xl font-bold">Your Career Results</h1>
            </div>
            <p className="text-xl mb-6">
              Based on your responses, we've identified the following career paths that align with your skills, interests, and preferences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center">
                <Download size={18} className="mr-2" />
                Download Report
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center">
                <Share2 size={18} className="mr-2" />
                Share Results
              </button>
            </div>
          </div>
          
          {/* Career Matches */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Top Career Matches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockCareerMatches.map((career) => (
                <CareerMatchCard 
                  key={career.id}
                  career={career}
                />
              ))}
            </div>
          </div>
          
          {/* Skills Assessment */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Your Skills Analysis</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Based on your assessment, we've analyzed your current skills and identified areas for growth to help you succeed in your recommended career paths.
                </p>
                <h3 className="text-xl font-semibold mb-3">Key Strengths</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">●</span>
                    <span>Problem-solving and analytical thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">●</span>
                    <span>Technical aptitude and quick learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">●</span>
                    <span>Attention to detail and thoroughness</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Growth Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">●</span>
                    <span>Advanced programming concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">●</span>
                    <span>Team collaboration and communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">●</span>
                    <span>Project management and planning</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <SkillsRadarChart />
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Recommended Next Steps</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-1">Explore Detailed Career Insights</h3>
                <p className="text-gray-700 mb-2">
                  Dive deeper into each recommended career path to learn about job prospects, required skills, and day-to-day responsibilities.
                </p>
                <Link
                  to="/insights"
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
                >
                  View Career Insights <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-1">Get Personalized Learning Recommendations</h3>
                <p className="text-gray-700 mb-2">
                  Receive custom course and learning resource recommendations to help you develop the skills needed for your target careers.
                </p>
                <Link
                  to="/profile"
                  className="text-purple-600 font-medium inline-flex items-center hover:text-purple-800 transition-colors"
                >
                  View Learning Path <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-1">Ask Questions with AI Career Assistant</h3>
                <p className="text-gray-700 mb-2">
                  Have questions about your results or need more specific guidance? Chat with our AI assistant for personalized advice.
                </p>
                <Link
                  to="/chat"
                  className="text-green-600 font-medium inline-flex items-center hover:text-green-800 transition-colors"
                >
                  Chat with AI Assistant <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/chat"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Ask Follow-up Questions <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;