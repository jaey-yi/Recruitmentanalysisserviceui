import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import { mockInterviewQuestions } from '../data/mockData';

export function InterviewProgressPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < mockInterviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
      setTimeLeft(60);
    } else {
      // Submit interview
      navigate('/interview-result/1');
    }
  };

  const question = mockInterviewQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === mockInterviewQuestions.length - 1;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-[900px] mx-auto px-8">
        {/* Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button 
              onClick={() => navigate('/interview-create')}
              className="hover:text-primary transition-colors"
            >
              면접 생성
            </button>
            <span>/</span>
            <span className="text-primary">면접 진행</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200">
          {/* Timer and Progress */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div
                className={`text-2xl ${
                  timeLeft <= 10 ? 'text-red-600' : 'text-primary'
                }`}
              >
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-gray-500">|</div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  question.difficulty === '상' ? 'bg-red-50 text-red-600' :
                  question.difficulty === '중' ? 'bg-amber-50 text-amber-600' :
                  'bg-green-50 text-green-600'
                }`}>
                  {question.difficulty}
                </span>
                <span className="text-gray-600">
                  질문 {question.questionNumber} / {mockInterviewQuestions.length}
                </span>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="mb-6">Q{question.questionNumber}.</h2>
            <p className="text-lg text-gray-700">{question.question}</p>
          </div>

          {/* Answer Input */}
          <div className="mb-6">
            <label className="block mb-3">답변</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="답변을 입력하세요..."
              rows={10}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Next/Submit Button */}
          <button
            onClick={handleNext}
            className="w-full py-4 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            {isLastQuestion ? (
              <>
                <Check size={20} />
                제출
              </>
            ) : (
              <>
                다음 질문
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}