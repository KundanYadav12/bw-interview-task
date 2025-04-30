import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Instruction.css'; // For custom styles with :root

const Instruction = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (agree) {
      navigate('/exam/test/my-theme'); // navigate to test page or next route
    } else {
    //   alert('Please confirm that you have read and understood the instructions.');
    const toastEl = document.getElementById('instructionToast');
    if (toastEl) {
      toastEl.classList.add('show');
      setTimeout(() => toastEl.classList.remove('show'), 4000);
    }
    }
  };

  return (


    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
  <div className="card shadow rounded-4 p-4 w-100" style={{ maxWidth: '600px' }}>
    <h2 className="mb-4 text-center" style={{ color: 'var(--primary-color)' }}>  <i className="bi bi-clipboard-check me-2"></i>Instructions</h2>
    
    <ul className="instruction-list ps-3">
      <li>Read each question carefully before answering.</li>
      <li>There is no negative marking for wrong answers.</li>
      <li>Each question has only one correct option.</li>
      <li>You must complete the test within the allotted time.</li>
      <li>Do not refresh or close the browser during the test.</li>
      <li>Click the "Submit" button once you have answered all questions.</li>
    </ul>

    <div className="form-check mt-4">
      <input
        className="form-check-input me-2"
        type="radio"
        name="confirm"
        id="confirm"
        checked={agree}
        onChange={() => setAgree(!agree)}
      />
      <label className="form-check-label" htmlFor="confirm">
        I have read and understood the instructions.
      </label>
    </div>

    <div className="text-center mt-4">
      <button
        className="btn text-white px-4 py-2 w-100"
        onClick={handleProceed}
        style={{
          backgroundColor: 'var(--primary-color)',
          fontSize: 'var(--btn-font-size)',
          borderRadius: '0.5rem',
        }}
      >
        OK
      </button>
    </div>
  </div>
  {/* Toast for alert */}
<div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
  <div
    id="instructionToast"
    className="toast align-items-center text-bg-warning border-0"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    style={{ minWidth: '300px' }}
  >
    <div className="d-flex">
      <div className="toast-body d-flex align-items-center">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        Please confirm that you have read and understood the instructions.
      </div>
      <button
        type="button"
        className="btn-close btn-close-white me-2 m-auto"
        onClick={() => {
          const toast = document.getElementById('instructionToast');
          if (toast) toast.classList.remove('show');
        }}
        aria-label="Close"
      ></button>
    </div>
  </div>
</div>

</div>

  );
};

export default Instruction;
