// eslint-disable-next-line no-unused-vars
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-60">
      <h1>Sign Up Page</h1>
      <div className="flex underline gap-36">
        <li>
          <a href="/user/home">Back to Home Page</a>
        </li>
        <li>
          <a href="/auth/sign-in">Sign Up</a>
        </li>
      </div>
    </div>
  );
};

export default SignUpPage;
