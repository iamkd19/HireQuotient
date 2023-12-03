import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHand } from "react-icons/fa6";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true);
        }
      },
      { threshold: 0 } // Adjust threshold as needed
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "tween", ease: "easeInOut" },
    },
  };

  const [showImages, setShowImages] = useState(false);
  const imagesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImages(true);
        }
      },
      { threshold: 0 } // Adjust threshold as needed
    );

    if (imagesRef.current) {
      observer.observe(imagesRef.current);
    }

    return () => {
      if (imagesRef.current) {
        observer.unobserve(imagesRef.current);
      }
    };
  }, []);

  const iimageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "tween", ease: "easeInOut" },
    },
  };

  const imageUrls = [
    "https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024",
    "https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512",
    "https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512",
    "https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512",
  ];

  return (
    <div>
      <div className="home-container bg-gradient-to-b from-pink-500 to-white h-screen flex flex-col items-center justify-center">
        <motion.div
          className="box div1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <h2 className="bg-white rounded text-xs font-bold text-emerald-400 px-1 py-1 mb-5 flex items-center">
            <FaHand className="mr-2" /> WELCOME TO MANAGE WISE!
          </h2>
        </motion.div>

        <motion.div
          className="box div1 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 2 }}
        >
          <h2 className="font-semibold mt-0 px-1 text-7xl text-white text-center mb-2">
            Empower your business with
          </h2>
          <h2 className=" font-semibold mt-0 px-1 text-7xl text-white text-center">
            <span className="text-pink-500">Strategic</span> insights
          </h2>
          <h2 className="font-semibold mt-0 px-1 text-xl text-white text-red-600 text-center mt-7 mb-0">
            Powerful management platform designed to streamline your business
          </h2>
          <h2 className="font-semibold mt-0 px-1 text-xl text-white text-red-600 text-center mb-2">
            Sorry I have Semester couldn't do it nicely
          </h2>
        </motion.div>
      </div>

      <div
        id="image-section"
        className="justify-center mt-0"
        style={{ marginTop: "-150px" }}
      >
        <div
          className="justify-center"
          style={{ display: "flex", marginTop: "5px" }}
        >
          <motion.div
            className="box div1"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            style={{ width: "15%", height: "50px" }}
          >
            <motion.h2
              className="bg-blue-600 font-bold rounded-2xl text-white text-lg p-6"
              whileHover={{ x: -10 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              Get Started
            </motion.h2>
          </motion.div>

          <motion.div
            className="box div2 ml-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            style={{ width: "15%", height: "220px" }}
          >
            <h2 className="text-lg font-bold  bg-white text-black rounded-lg p-4">
              Watch Demo
            </h2>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="box justify-center mt-0"
        ref={imageRef}
        variants={imageVariants}
        initial="hidden"
        animate={showImage ? "visible" : "hidden"}
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          marginTop: "-64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
          alt="Your Alt Text"
          style={{ width: "40%", height: "auto" }}
        />
      </motion.div>

      <div>
        <h2 className="text-xs font-bold text-center mt-16 bg-white text-indigo-700 p-2">
          <span className="align-middle inline-block border-2 border-red-500 p-3 m-1">
            PREMIER FEATURES
          </span>
        </h2>

        <h2 className="text-4xl text-center font-bold mt-6 justify-center">
          Discover our product's{" "}
          <span className="text-red-500">Capabilities</span>
        </h2>
        <h2 className="text-xl text-center font-bold text-zinc-400 mt-5">
          Don't settle for mediocrity - embrace the future of management
        </h2>
        <h2 className="text-xl  font-bold text-center text-zinc-400">
          with Manage Wise.
        </h2>
      </div>

      <div id="image-section" className="justify-center mt-0" ref={imagesRef}>
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            className="box justify-center mt-0"
            variants={iimageVariants}
            initial="hidden"
            animate={showImages ? "visible" : "hidden"}
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              marginTop: index === 0 ? "-64px" : "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              style={{ width: "40%", height: "auto" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
