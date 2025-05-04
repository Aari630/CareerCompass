import React, { useState } from 'react';
import { Search, Filter, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import CareerDetailCard from '../components/insights/CareerDetailCard';
import SalaryTrendsChart from '../components/insights/SalaryTrendsChart';
import CareerRoadmap from '../components/insights/CareerRoadmap';
import { careerInsights } from '../data/careerInsights';

const InsightsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCareer, setSelectedCareer] = useState(careerInsights[0]);
  
  const filteredCareers = careerInsights.filter(career => 
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || career.category === activeTab)
  );

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3">Career Insights</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore detailed information about various tech career paths, including job responsibilities, 
            required skills, salary data, and growth projections.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center relative flex-shrink-0">
              <div className="flex items-center mr-2">
                <Filter size={18} className="text-gray-400 mr-2" />
                <span className="text-gray-700">Filter:</span>
              </div>
              <select 
                className="appearance-none bg-transparent border border-gray-300 rounded-md px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="development">Software Development</option>
                <option value="data">Data Science</option>
                <option value="design">Design</option>
                <option value="infrastructure">Infrastructure & DevOps</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Career List */}
          <div className="lg:col-span-1 space-y-4">
            {filteredCareers.length > 0 ? (
              filteredCareers.map((career) => (
                <div 
                  key={career.id}
                  onClick={() => setSelectedCareer(career)}
                  className={`bg-white rounded-xl shadow-sm p-4 border-l-4 cursor-pointer transition-all ${
                    selectedCareer.id === career.id 
                      ? 'border-blue-600 shadow-md' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <h3 className="font-semibold text-lg">{career.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{career.shortDescription}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-700">
                      <DollarSign size={14} className="mr-1" />
                      <span>{career.averageSalary}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>{career.growthRate} growth</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <p className="text-gray-600">No careers found matching your search criteria.</p>
              </div>
            )}
          </div>
          
          {/* Career Details */}
          <div className="lg:col-span-2 space-y-6">
            <CareerDetailCard career={selectedCareer} />
            
            <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
              <h3 className="text-xl font-semibold mb-4">Career Roadmap</h3>
              <p className="text-gray-600 mb-6">
                Follow this recommended path to build the skills and experience needed for a successful career as a {selectedCareer.title}.
              </p>
              <CareerRoadmap stages={selectedCareer.roadmap} />
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Salary Trends</h3>
              <p className="text-gray-600 mb-6">
                Average salaries for {selectedCareer.title} positions based on experience level and location.
              </p>
              <SalaryTrendsChart careerData={selectedCareer} />
            </div>
            
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition-colors">
                Explore Learning Resources <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;