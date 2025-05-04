import React, { useState } from 'react';
import { Briefcase, BookOpen, Award, Calendar, Edit2, Save, User } from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Aarish Arshi',
    email: 'aarisharshi123@email.com',
    major: 'Computer Science',
    year: 'Junior',
    interests: ['Web Development', 'Artificial Intelligence', 'Mobile Apps']
  });
  
  const [formData, setFormData] = useState({...profile});
  
  const handleEdit = () => {
    setIsEditing(true);
    setFormData({...profile});
  };
  
  const handleSave = () => {
    setProfile({...formData});
    setIsEditing(false);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };
  
  const handleInterestChange = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(i => i !== interest)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    }
  };

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-6 text-white">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4">
                    <User size={48} className="text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-center">{profile.name}</h2>
                  <p className="text-center text-blue-100">{profile.email}</p>
                </div>
                
                <div className="p-6">
                  {isEditing ? (
                    <form>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Major</label>
                        <input
                          type="text"
                          name="major"
                          value={formData.major}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                        <select
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Freshman">Freshman</option>
                          <option value="Sophomore">Sophomore</option>
                          <option value="Junior">Junior</option>
                          <option value="Senior">Senior</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
                        <div className="space-y-2">
                          {['Web Development', 'Data Science', 'Machine Learning', 'Cybersecurity', 'Mobile Apps', 'Artificial Intelligence', 'Game Development', 'DevOps'].map((interest) => (
                            <label key={interest} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={formData.interests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                              />
                              <span className="ml-2 text-gray-700">{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <button
                        type="button"
                        onClick={handleSave}
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        <Save size={16} className="mr-2" />
                        Save Changes
                      </button>
                    </form>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Major</h3>
                          <p className="text-gray-800">{profile.major}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Year</h3>
                          <p className="text-gray-800">{profile.year}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Interests</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {profile.interests.map(interest => (
                              <span 
                                key={interest} 
                                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={handleEdit}
                        className="w-full mt-6 py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
                      >
                        <Edit2 size={16} className="mr-2" />
                        Edit Profile
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Recommended Career Paths */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Briefcase size={20} className="text-blue-600 mr-2" />
                  Recommended Career Paths
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                    <h3 className="font-semibold mb-1">Software Developer</h3>
                    <p className="text-sm text-gray-600 mb-2">95% match with your profile</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <a href="/insights/software-developer" className="text-blue-600 text-sm hover:underline">View details</a>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                    <h3 className="font-semibold mb-1">Web Developer</h3>
                    <p className="text-sm text-gray-600 mb-2">87% match with your profile</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <a href="/insights/web-developer" className="text-blue-600 text-sm hover:underline">View details</a>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                    <h3 className="font-semibold mb-1">AI Engineer</h3>
                    <p className="text-sm text-gray-600 mb-2">82% match with your profile</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <a href="/insights/ai-ml-engineer" className="text-blue-600 text-sm hover:underline">View details</a>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                    <h3 className="font-semibold mb-1">Mobile App Developer</h3>
                    <p className="text-sm text-gray-600 mb-2">78% match with your profile</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <a href="/insights/mobile-developer" className="text-blue-600 text-sm hover:underline">View details</a>
                  </div>
                </div>
              </div>
              
              {/* Learning Recommendations */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpen size={20} className="text-blue-600 mr-2" />
                  Personalized Learning Path
                </h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4 py-1">
                    <h3 className="font-semibold mb-1">Current Focus: Web Development Fundamentals</h3>
                    <p className="text-sm text-gray-600">
                      Based on your interests and career matches, we recommend starting with these resources:
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">HTML/CSS Mastery</h4>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Beginner</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Master the fundamentals of web development with HTML and CSS.
                      </p>
                      <a href="#" className="text-blue-600 text-sm hover:underline">Start learning</a>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">JavaScript Essentials</h4>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Intermediate</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Learn core JavaScript concepts and DOM manipulation.
                      </p>
                      <a href="#" className="text-blue-600 text-sm hover:underline">Start learning</a>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">React Framework</h4>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Intermediate</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Build modern web applications with React.
                      </p>
                      <a href="#" className="text-blue-600 text-sm hover:underline">Start learning</a>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">Backend with Node.js</h4>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Advanced</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Create server-side applications with Node.js and Express.
                      </p>
                      <a href="#" className="text-blue-600 text-sm hover:underline">Start learning</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievements & Progress */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Award size={20} className="text-blue-600 mr-2" />
                    Your Progress
                  </h2>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Calendar size={16} className="mr-1" />
                    Last updated: Today
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Assessment Completion</span>
                      <span className="text-sm text-gray-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Career Exploration</span>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Learning Path Progress</span>
                      <span className="text-sm text-gray-600">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Skill Development</span>
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <h3 className="font-medium mb-3">Recent Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Award size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Completed Career Assessment</p>
                        <p className="text-sm text-gray-600">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <BookOpen size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Started HTML/CSS Course</p>
                        <p className="text-sm text-gray-600">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;