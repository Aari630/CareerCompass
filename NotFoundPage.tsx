import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;