import React from "react";
import { useLottie } from "lottie-react";
import loadingAnimation from "../../assets/animations/Tloading.json";

const Loading = () => {

  const options = {
    animationData: loadingAnimation,
    loop: true,
    autoplay: true,
  };

   const { View } = useLottie(options);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      
      <div className="flex flex-col items-center text-center bg-gray-50">
        
        {/* Animation */}
        <div className="w-40 sm:w-56 md:w-72 lg:w-80">
          <>{View}</>
        </div>

        {/* Text */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black">
          Checking access...
        </p>

      </div>
    </div>
  );
};

export default Loading;