import React from "react";
import  { useLottie } from "lottie-react";
import { Link } from "react-router";
import forbiddenAnimation from "../../assets/animations/forbidden.json";

const Forbidden = () => {

  const options = {
    animationData: forbiddenAnimation,
    loop: true,
    autoplay: true,
  };

   const { View } = useLottie(options);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col items-center text-center max-w-lg w-full">
        
        {/* Animation */}
        <div className="w-48 sm:w-64 md:w-80 lg:w-96">
          <>{View}</>
        </div>

        {/* Title */}
        <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
          Access Denied
        </h1>

        {/* Message */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600">
          You don't have permission to view this page.
        </p>

        <p className="text-sm sm:text-base text-gray-500 max-w-md mt-1">
          Please contact your administrator or return to a safe page.
        </p>

        {/* Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          
          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Go Home
            </button>
          </Link>

          {/* Optional Back Button */}
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition text-black"
          >
            Go Back
          </button>
        </div> 

      </div>
    </div>
  );
};

export default Forbidden;