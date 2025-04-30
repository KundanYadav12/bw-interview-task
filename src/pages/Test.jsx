

import questionsData from '../data/testData.json';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Test() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(questionsData.questiondata);
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) =>
        date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const formatTime = (date) =>
        date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const handleChange = (questionIndex, selectedOption) => {
        setAnswers({ ...answers, [questionIndex]: selectedOption });
    };

    const handleSubmit = () => {
        localStorage.setItem('submittedAnswers', JSON.stringify(answers));
        navigate('/exam/submit/my-theme');
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const q = questions[currentQuestionIndex];

    return (
        <div className="container-fluid my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-primary"> <i className="bi bi-pencil-square me-2"></i>Online Test</h2>
                <div className="text-end">
                    <div className="text-muted">{formatDate(currentTime)}</div>
                    <div className="fw-semibold">{formatTime(currentTime)}</div>
                </div>
            </div>



            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="col-md-8 col-lg-6">
                    {q && (
                        <div className="card mb-4 border border-primary-subtle shadow rounded-4 p-4">
                            <div className="card-body">
                                <h4 className="card-title fw-bold mb-3 text-primary">
                                    {currentQuestionIndex + 1}. {q.question}
                                </h4>
                                <hr />
                                <div className="list-group mt-4">
                                    {q.options.map((opt, i) => (
                                        <label
                                            key={i}
                                            className="list-group-item list-group-item-action border border-secondary-subtle d-flex align-items-center gap-3 radio-hover rounded-pill mb-3 px-3 py-2"
                                            style={{ cursor: 'pointer', transition: '0.3s' }}
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${currentQuestionIndex}`}
                                                className="form-check-input me-2 accent-primary"
                                                value={opt.option}
                                                onChange={() => handleChange(currentQuestionIndex, opt.option)}
                                                checked={answers[currentQuestionIndex] === opt.option}
                                            />
                                            <span className="fw-semibold fs-5">{String.fromCharCode(65 + i)}.</span>
                                            <span className="flex-grow-1 fs-5">{opt.option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-outline-secondary px-4 py-2"
                            onClick={handlePrev}
                            disabled={currentQuestionIndex === 0}
                        >
                            Previous
                        </button>

                        {currentQuestionIndex === questions.length - 1 ? (
                            <button className="btn btn-success px-4 py-2" onClick={handleSubmit}>Submit</button>
                        ) : (
                            <button className="btn btn-primary px-4 py-2" onClick={handleNext}>Next</button>
                        )}
                    </div>
                </div>
            </div>


            <style>{`
        :root {
          --hover-bg: #f0f8ff;
          --border-focus: #0d6efd;
        }

        .radio-hover:hover {
          background-color: var(--hover-bg);
          border-color: var(--border-focus) !important;
        }

        .accent-primary:checked {
          accent-color: var(--border-focus);
        }

        .question-card {
          transition: background-color 0.3s ease;
        }

        input[type="radio"] {
  accent-color: #0d6efd;
}
      `}</style>
        </div>
    );
}

export default Test;
