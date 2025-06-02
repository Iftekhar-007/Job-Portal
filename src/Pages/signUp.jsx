import React, { use } from "react";
import rocket from "../assets/rocket.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router";

const SignUp = () => {
  const { signUpWithEmail } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password, name, photo };
    console.log(newUser);

    signUpWithEmail(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.log(error.message);
      });
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
              <h1 className="text-5xl font-bold text-center">Sign Up Now!</h1>
              <form onSubmit={handleSignUp}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Name"
                    name="name"
                  />

                  <label className="label">PhotoURL</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="photoURL"
                    name="photo"
                  />

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
              <p>
                Have an account already ? <NavLink to="/login">LogIn</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
