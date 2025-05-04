import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import QuizProgressBar from '../components/quiz/QuizProgressBar';
import QuizQuestion from '../components/quiz/QuizQuestion';
import { quizQuestions } from '../data/quizQuestions';

const CareerQuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const totalSteps = quizQuestions.length;
  const progress = ((currentStep) / totalSteps) * 100;
  const currentQuestion = quizQuestions[currentStep];

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitQuiz();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitQuiz = () => {
    setIsSubmitting(true);
    
    // Simulate API call to process quiz results
    setTimeout(() => {
      // In a real app, we would send the answers to an API
      console.log('Quiz answers:', answers);
      setIsSubmitting(false);
      navigate('/results');
    }, 1500);
  };

  const isQuestionAnswered = currentQuestion && 
    currentQuestion.id in answers && 
    answers[currentQuestion.id] !== undefined;

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-3">Career Assessment Quiz</h1>
            <p className="text-gray-600">
              Answer the following questions to get personalized career recommendations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="mb-6">
              <QuizProgressBar 
                currentStep={currentStep + 1} 
                totalSteps={totalSteps} 
                progress={progress} 
              />
            </div>
            
            {currentQuestion && (
              <QuizQuestion 
                question={currentQuestion}
                selectedAnswer={answers[currentQuestion.id]}
                onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
              />
            )}
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center px-5 py-2 rounded-md ${
                currentStep === 0 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft size={18} className="mr-2" /> Previous
            </button>
            
            <button
              onClick={nextStep}
              disabled={!isQuestionAnswered || isSubmitting}
              className={`flex items-center px-6 py-2 rounded-md ${
                isQuestionAnswered && !isSubmitting
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">●</span>
                  Processing...
                </>
              ) : currentStep < totalSteps - 1 ? (
                <>
                  Next <ArrowRight size={18} className="ml-2" />
                </>
              ) : (
                <>
                  Finish <CheckCircle2 size={18} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuizPage;