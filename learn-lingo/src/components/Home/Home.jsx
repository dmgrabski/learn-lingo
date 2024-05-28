import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../SignupForm/SignupForm.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import Modal from '../Modal/Modal.jsx';
import './Home.css';

function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="home">
      <h1>Learn Lingo</h1>
      <p>Discover the benefits of our language learning platform!</p>
      <Link to="/teachers">Start Now</Link>
      <button onClick={() => setShowSignup(true)}>Sign Up</button>
      <button onClick={() => setShowLogin(true)}>Log In</button>

      <Modal show={showSignup} onClose={() => setShowSignup(false)}>
        <SignupForm />
      </Modal>

      <Modal show={showLogin} onClose={() => setShowLogin(false)}>
        <LoginForm />
      </Modal>
    </div>
  );
}

export default Home;
