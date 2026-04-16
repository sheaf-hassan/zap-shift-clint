import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  console.log('in register', location)

  const handleRegistration = (data) => {
    console.log("after register", data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);


        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(image_API_URL, formData).then((res) => {
          console.log("after image upload", res.data.data.url);

          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("User profile update done");
              navigate(location.state || '/');
            })
            .catch((error) => console.log(error));
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card w-full mx-auto max-w-sm shrink-0 shadow-2xl bg-gray-50 my-5">
      <h3 className="text-3xl text-center text-black">Welcome to Zap Shift</h3>
      <p className="text-center text-black">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name field */}
          <label className="label text-gray-400">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input bg-gray-50 text-gray-400 border-gray-400"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}

          {/* photo/image field */}
          <label className="label text-gray-400">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input bg-gray-50 text-gray-400 border-gray-400"
            placeholder="Your Photo"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Photo is required.</p>
          )}

          {/* email field */}
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
          <Link state={location.state} className="text-blue-400 underline ml-2" to="/login">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
