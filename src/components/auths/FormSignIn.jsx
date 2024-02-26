// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignIn = () => {
  return (
    <div className="flex flex-col gap-5 p-12 rounded-2xl bg-white/35 w-[475px]">
      <a href="" className="flex justify-center mb-4">
        <img src="/src/assets/auth/form-logo.png" alt="" />
      </a>
      <InputEmail />
      <InputPassword placeholder="Your Password" />
      <p className="mb-4 text-sm font-bold">Forgot password?</p>
      <SubmitButton name="Sign In" />
      <BorderButton />
    </div>
  );
};

export default FormSignIn;
