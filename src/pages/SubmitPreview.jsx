// // import questionsData from '../data/testData.json';

// // function SubmitPreview() {
// //   const submittedAnswers = JSON.parse(localStorage.getItem('submittedAnswers') || '{}');
// //   const questions = questionsData.questiondata;

// //   return (
// //     <div className="container my-5">
// //       <h2 className="mb-4 text-primary">Submit Preview</h2>
// //       {questions.map((q, index) => (
// //         <div key={index} className="card mb-3">
// //           <div className="card-body">
// //             <h5 className="card-title">{index + 1}. {q.question}</h5>
// //             <p>
// //               <strong>Your Answer:</strong>{' '}
// //               {submittedAnswers[index] ? (
// //                 <span>{submittedAnswers[index]}</span>
// //               ) : (
// //                 <span className="text-danger">Not Answered</span>
// //               )}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default SubmitPreview;


// import questionsData from '../data/testData.json';

// function SubmitPreview() {
//   const submittedAnswers = JSON.parse(localStorage.getItem('submittedAnswers') || '{}');
//   const questions = questionsData.questiondata;

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4 text-primary border-bottom pb-2">📝 Submit Preview</h2>

//       <div className="row g-4">
//         {questions.map((q, index) => (
//           <div key={index} className="col-12">
//             <div className="card border-0 shadow-sm rounded-4">
//               <div className="card-body">
//                 <h5 className="card-title mb-3 fw-semibold text-dark">
//                   {index + 1}. {q.question}
//                 </h5>
//                 <p className="mb-0">
//                   <span className="fw-bold">Your Answer: </span>
//                   {submittedAnswers[index] ? (
//                     <span className="badge bg-info-subtle text-dark px-3 py-2 rounded-pill">
//                       {submittedAnswers[index]}
//                     </span>
//                   ) : (
//                     <span className="text-danger fw-medium">Not Answered</span>
//                   )}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubmitPreview;



import { useState } from 'react';
import questionsData from '../data/testData.json';
import { useNavigate } from 'react-router-dom';

function SubmitPreview() {
    const submittedAnswers = JSON.parse(localStorage.getItem('submittedAnswers') || '{}');
    const questions = questionsData.questiondata;
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleFinalSubmit = () => {
        setSubmitted(true);

        // Simulate delay before navigating to Report page
        setTimeout(() => {
            navigate('/exam/report/my-theme');
        }, 3000); // 3 seconds
    };

    return (

        <div className="container-fluid my-4">
            {!submitted ? (
                <>
                    <div className='d-flex justify-content-start align-items-center mb-5 border-bottom pb-2 fw-bold'>

                        <h2 className=" fw-bold  text-left text-primary ">
                            📝 Submit Preview
                        </h2>
                    </div>

                    <div className="row g-4">
                        {questions.map((q, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div className="card border-0 shadow rounded-4 p-3 bg-light">
                                    <div className="card-body">
                                        <h5 className="card-title mb-3 fw-semibold text-dark">
                                            <i className="bi bi-question-circle me-2 text-primary"></i>
                                            {index + 1}. {q.question}
                                        </h5>
                                        <p className="mb-0">
                                            <span className="fw-bold">Your Answer: </span>
                                            {submittedAnswers[index] ? (
                                                <span className="badge bg-info-subtle text-dark px-3 py-2 rounded-pill">
                                                    {submittedAnswers[index]}
                                                </span>
                                            ) : (
                                                <span className="text-danger fw-medium">Not Answered</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <button
                            className="btn px-5 py-2 text-white"
                            onClick={handleFinalSubmit}
                            style={{
                                backgroundColor: 'var(--primary-color)',
                                fontSize: 'var(--btn-font-size)',
                                borderRadius: '0.75rem',
                            }}
                        >
                            ✅ Submit Test
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center py-5 animate__animated animate__fadeIn">
                    <div className="display-1 text-success mb-3">
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <h2 className="fw-bold text-success">Thank You!</h2>
                    <p className="lead text-secondary">Your responses have been successfully submitted.</p>
                    <p className="text-muted">Redirecting to report...</p>
                </div>
            )}
        </div>

    );
}

export default SubmitPreview;
