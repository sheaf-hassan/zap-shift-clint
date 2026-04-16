import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate(); 
  

  
  const handleLogin = (data) => {
    console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card w-full mx-auto max-w-sm shrink-0 shadow-2xl bg-gray-50 my-5">
      <h3 className="text-3xl text-center text-black">Welcome back</h3>
      <p className="text-center text-black">Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* email field */}
          <label className="label text-gray-400">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input  bg-gray-50 text-gray-400 border-gray-400"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* password field */}
          <label className="label text-gray-400">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input bg-gray-50 text-gray-400 border-gray-400"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}
          <div>
            <a className="link link-hover text-black">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-black">New to Zap Shift <Link state={location.state} className="text-blue-400 underline ml-2" to="/register">Register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
