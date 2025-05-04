import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Lightbulb, TrendingUp } from 'lucide-react';
import TestimonialCard from '../components/home/TestimonialCard';
import FeatureCard from '../components/home/FeatureCard';
import CareerPathCard from '../components/home/CareerPathCard';

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Discover Your Perfect Tech Career Path
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                AI-powered career guidance tailored specifically for undergraduate tech students. 
                Find your direction, build your roadmap, and launch your dream career.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/career-quiz" 
                  className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Assessment <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/insights" 
                  className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Explore Careers
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students exploring career paths" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CareerCompass Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform helps you navigate the complex world of tech careers and find your perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-blue-600" />}
              title="Personalized Assessment"
              description="Take our AI-driven assessment to analyze your skills, interests, and personality traits."
            />
            <FeatureCard 
              icon={<Lightbulb className="w-10 h-10 text-purple-600" />}
              title="Smart Recommendations"
              description="Receive tailored career suggestions based on your unique profile and market trends."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-10 h-10 text-green-600" />}
              title="Career Insights"
              description="Explore detailed job market data, salary trends, and future growth projections."
            />
            <FeatureCard 
              icon={<Award className="w-10 h-10 text-orange-600" />}
              title="Learning Roadmaps"
              description="Get customized skill development plans and resource recommendations."
            />
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Tech Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of the most in-demand career paths in the tech industry today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CareerPathCard 
              title="Software Development"
              image="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              description="Build applications and software solutions that power modern businesses and everyday life."
              avgSalary="$105,000"
              growth="22%"
            />
            <CareerPathCard 
              title="Data Science"
              image="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              description="Analyze complex data to extract insights and drive strategic business decisions."
              avgSalary="$120,000"
              growth="31%"
            />
            <CareerPathCard 
              title="UX/UI Design"
              image="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              description="Create intuitive, accessible, and beautiful digital experiences for users."
              avgSalary="$95,000"
              growth="25%"
            />
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/insights" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              View all career paths <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who found their dream careers using CareerCompass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Alex Johnson"
              role="Software Engineer at Google"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              quote="CareerCompass helped me identify my strengths in problem-solving and guided me toward software engineering. The personalized roadmap was invaluable!"
            />
            <TestimonialCard 
              name="Priya Sharma"
              role="Data Scientist at Microsoft"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              quote="I was torn between several career options. The AI assessment pinpointed data science as my ideal path, and now I'm thriving in a role I love."
            />
            <TestimonialCard 
              name="Marcus Williams"
              role="UX Designer at Adobe"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              quote="The career insights showed me that UX design was the perfect blend of my creative and analytical skills. I followed the learning roadmap and landed my dream job!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Tech Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Take the first step toward your ideal career path. Our AI-powered assessment takes just 10 minutes to complete.
          </p>
          <Link 
            to="/career-quiz" 
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
          >
            Start Your Assessment <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;