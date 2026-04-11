import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log("after register", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card w-full mx-auto max-w-sm shrink-0 shadow-2xl bg-gray-50">
      <h3 className="text-3xl text-center text-black">Welcome to Zap Shift</h3>
      <p className="text-center text-black">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label text-gray-400">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input bg-gray-50 text-gray-400 border-gray-400"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}

          {/* password */}
          <label className="label text-gray-400">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+\\|;:'",.<>/?])[A-Za-z\d@$!%*?&^#()[\]{}\-_=+\\|;:'",.<>/?]{8,}$/,
            })}
            className="input bg-gray-50 text-gray-400 border-gray-400"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 character or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have at least one uppercase, at least one lowercase,
              at least one number, and at least one special characters & at
              least minimum 8 characters
            </p>
          )}

          <div>
            <a className="link link-hover text-black">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="text-black">
          Already have an account{" "}
          <Link className="text-blue-400 underline ml-2" to="/login">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;


