import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between w-[1440px] lg:mx-auto">
        <div>
          <motion.img
            animate={{
              x: [0, 200, 0],
              y: [0, 100, 0],
              transition: { duration: 5, repeat: Infinity },
            }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <motion.img
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              transition: { duration: 10, repeat: Infinity },
            }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut
            assumenda excepturi exercitationem quasi. <br /> In deleniti eaque
            aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
