 import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import examtest from "../assets/examtest.jpg";
 

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  subject: z.enum(['History', 'Science', 'Math', 'Geography'], {
    required_error: 'Subject is required',
  }),
  password: z.string().min(1, 'Password is required'),
});

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    navigate('/exam/instruction/my-theme');
  };

  return (
  
    
     <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
  <div className="card shadow rounded-4 overflow-hidden" style={{width:"1200px"}}>
    <div className="row g-0 flex-md-row flex-column-reverse">
      
      {/* Left: Form Section */}
      <div className="col-md-6 p-5 bg-white">
        <h2 className="mb-4 text-center" style={{ color: 'var(--primary-color)' }}> <i className="bi bi-person-plus me-2"></i>
          Registration Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              {...register('name')}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register('email')}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input
                type="text"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                {...register('phone')}
                maxLength={10}
              />
            </div>
            {errors.phone && <div className="invalid-feedback d-block">{errors.phone.message}</div>}
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <select
              className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
              {...register('subject')}
            >
              <option value="">Select Subject</option>
              <option value="History">History</option>
              <option value="Science">Science</option>
              <option value="Math">Math</option>
              <option value="Geography">Geography</option>
            </select>
            {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              {...register('password')}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>

      {/* Right: Branding Section */}
      <div
        className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center text-center p-4"
        style={{
        //   backgroundImage: "url('../assets/examtest')",
        backgroundImage: `url(${examtest})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded-4">
          <h1 className="display-5 fw-bold">BrainWonders</h1>
          <p className="lead mt-3">Unlock your mind's full potential with guided learning</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Registration;
