import React, { useState } from 'react';
import submitButtonImage from './img/button.png';
import './App.css';
import successMessageImage from "./img/ic_success.png";

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isCheckboxTouched, setIsCheckboxTouched] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setIsCheckboxTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isEmailValid || isColumbian) {
      setIsEmailTouched(true);
      return;
    }
    setIsSubmitted(true);
  };
  

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isCheckboxValid = isCheckboxChecked;
  const isFormValid = isEmailValid && isCheckboxValid;
  const isColumbian = email.endsWith('.co');
  const showEmailError =  !isEmailValid || isColumbian;
  const showCheckboxError = isCheckboxTouched && !isCheckboxValid;



  const emailErrorMessage = () => {
    if (!email) return 'Email address is required';
    if (!isEmailValid) return 'Please provide a valid e-mail address';
    if (isColumbian) return 'We are not accepting subscriptions from Colombia emails';

    return '';
  };
  
  
  
  


  return (
    <div>
      {!isSubmitted ? (
        <div className='cont'>
          <h2>Subscribe to newsletter</h2>
          <p className='info1'>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
                className={`box ${showEmailError ? 'error-box' : ''}`}
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="Type your email address here..."
            />
            <button type="submit" disabled={!isFormValid}>
              <img src={submitButtonImage} alt="Submit" className='submit' />
            </button>
            {showEmailError && <p className='error'>{emailErrorMessage()}</p>}
            <label>
              <input
                className='checkbox'
                type="checkbox"
                checked={isCheckboxChecked}

                onChange={handleCheckboxChange}
              />
                I agree to <a href="#" className='term'>terms of service</a>
            </label>
            {showCheckboxError && <p className='error'>You must accept the terms and conditions</p>}

          </form>
        </div>
      ) : (
        <div className="success-message">
          <img src={successMessageImage} alt="Success" className='success' />
          <h2 className='th'>Thanks for subscribing!</h2>
          <p className='thtext'>You have successfully subscribed to our email listing. Check your email for the discount code.</p>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
