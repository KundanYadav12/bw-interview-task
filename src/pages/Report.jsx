import questionsData from '../data/testData.json';
import { useEffect, useState } from 'react';

function Report() {
    const submittedAnswers = JSON.parse(localStorage.getItem('submittedAnswers') || '{}');
    const questions = questionsData.questiondata;

    const [score, setScore] = useState(0);

    useEffect(() => {
        let count = 0;
        questions.forEach((q, i) => {
            const correct = q.options[0].option; // assuming first is correct
            if (submittedAnswers[i] === correct) {
                count++;
            }
        });
        setScore(count);
    }, []);

    return (

        <div className="container-fluid my-4">
            {/* Heading and Score */}
            <div className=" mb-5 border-bottom pb-2 fw-bold d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-success fw-bold">
                    🎉 Test Report
                </h2>
                <p className="lead ">
                    You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
                </p>
            </div>

            {/* Questions Breakdown */}
            <div className="row g-4">
                {questions.map((q, index) => {
                    const correctAnswer = q.options[0].option;
                    const userAnswer = submittedAnswers[index];
                    const isCorrect = userAnswer === correctAnswer;

                    return (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow rounded-4 p-3 bg-light h-100">
                                <div className="card-body">
                                    <h5 className="card-title mb-3 text-dark fw-semibold">
                                        <i className="bi bi-question-circle text-primary me-2"></i>
                                        {index + 1}. {q.question}
                                    </h5>

                                    <p>
                                        <strong>Your Answer: </strong>
                                        {userAnswer ? (
                                            <span className={`badge px-3 py-2 rounded-pill ${isCorrect ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                                                {userAnswer}
                                            </span>
                                        ) : (
                                            <span className="text-danger fw-medium">Not Answered</span>
                                        )}
                                    </p>

                                    {!isCorrect && (
                                        <p className="mb-0">
                                            <strong>Correct Answer: </strong>
                                            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                                                {correctAnswer}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>



    );
}

export default Report;
