import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import rocket from "../assets/rocket.json";
import { NavLink, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";

const Login = () => {
  const { loginWithEmail } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    console.log(newUser);

    loginWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <title>Sign In || Job Portal</title>
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
              <form onSubmit={handleSignIn}>
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
              <p>
                New here ? <NavLink to="/signup">Sign Up Now!</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
