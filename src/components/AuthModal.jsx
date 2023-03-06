import React from "react";

const AuthModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle bg-primary/50">
        <div className="modal-box text-primary-focus relative ">
        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span/>
              <span className="label-text-alt"><a className="link link-primary">Forgot Password?</a></span>
            </label>
          </div>
          Don't have an account? <a className="link link-primary">Sign Up</a>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn bg-primary">
              Sign In
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
