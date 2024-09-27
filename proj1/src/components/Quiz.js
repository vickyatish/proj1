import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: 'What technology is used to detect walkways quality?',
      options: ['Machine Learning', 'Computer Vision', 'Blockchain', 'Cloud Computing'],
      answer: 'Computer Vision',
    },
    {
      question: 'What is the primary goal of curb detection?',
      options: ['To improve aesthetics', 'To assist navigation', 'To reduce costs', 'To enhance speed'],
      answer: 'To assist navigation',
    },
    {
        question: 'What is the primary goal of curb detection?',
        options: ['To improve aesthetics', 'To assist navigation', 'To reduce costs', 'To enhance speed'],
        answer: 'To assist navigation',
    },
    {
        question: 'What is the primary goal of curb detection?',
        options: ['To improve aesthetics', 'To assist navigation', 'To reduce costs', 'To enhance speed'],
        answer: 'To assist navigation',
    },
    {
        question: 'What is the primary goal of curb detection?',
        options: ['To improve aesthetics', 'To assist navigation', 'To reduce costs', 'To enhance speed'],
        answer: 'To assist navigation',
    }
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      <h2>Quiz</h2>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="quiz-section">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== ''}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button onClick={handleNext} className="next-button">
              {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;