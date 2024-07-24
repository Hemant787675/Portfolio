import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) {
      newErrors.name = 'Name is required';
    }
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.message) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setStatus({ type: 'success', message: 'Form has been submitted successfully!' });
        setForm({});
        setErrors({});
      } else {
        setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <section id='contact' className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h2 className='mb-8 text-4xl text-white text-center font-semibold'>Contact <span className='text-white'>Me</span></h2>
      <div className="container mx-auto px-4">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white mb-4 rounded-md shadow-lg">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"></p>
          <form action="" method="POST" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-cyan-700">Your name</label>
              <input
                type="text"
                id="name"
                name='name'
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 outline-0 ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Enter your name" onChange={handleForm} value={form.name || ''}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-cyan-700">Your email</label>
              <input
                type="email"
                id="email"
                name='email'
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 outline-0 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Enter your email" onChange={handleForm} value={form.email || ''}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-cyan-700">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 outline-0 ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Leave a comment..." onChange={handleForm} value={form.message || ''}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-cyan-700 sm:w-fit hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300"
            >
              Send message
            </button>
          </form>
          {status && (
            <div className={`mt-4 p-4 text-sm ${status.type === 'success' ? 'text-cyan-900 bg-cyan-100' : 'text-red-800 bg-red-100'} rounded-lg`} role="alert">
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
