import React from "react";
import rocket from "../assets/rocket.json";
import Lottie from "lottie-react";

const signUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    console.log(newUser);
  };
  return (
    <>
      <title>Sign Up || Job Portal</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:ml-32">
            <Lottie
              className="w-[250px] bg-transparent"
              animationData={rocket}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <form onSubmit={handleSignUp}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signUp;
