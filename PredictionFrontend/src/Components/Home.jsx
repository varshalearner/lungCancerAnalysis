import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homepgbgimg from "../assets/test.svg";
import Typewriter from "typewriter-effect";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (replace with your actual authentication logic)
    const token = localStorage.getItem("token"); // Example: Check for a token
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Implement logout logic (e.g., remove token from localStorage)
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="navbar py-4 fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 flex justify-between items-center">
        <div
          onClick={(e) => {
            navigate("/");
          }}
          className="logo cursor-pointer flex justify-center items-center"
        >
          <img
            className="w-14"
            src="https://pngimg.com/uploads/lung/lung_PNG9.png"
            alt=""
          />
          <p className="font-bold text-white">Lung Cancer Analyzer</p>
        </div>
        <ul className="menulist flex gap-4 text-white font-bold">
          <li>
            <a
              onClick={(e) => {
                navigate("/");
              }}
              href="#home"
            >
              home
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                navigate("/details");
              }}
              href="#analyze"
            >
              Analyze
            </a>
          </li>
          <li>
            <a href="#healthTips">Health Tips</a>
          </li>
          <li>
            <a href="#aboutUs">About Us</a>
          </li>
        </ul>
        {isLoggedIn ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
      <div
        className="body h-[98vh] bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% flex flex-col items-center justify-center pt-20"
        id="home"
      >
        <img className="w-60" src={homepgbgimg} alt="" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Lung Cancer Analysis:{" "}
        </h1>
        <div className="text-2xl font-semibold text-gray-800 mb-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" Early Detection, Better Outcomes")
                .callFunction(() => {
                  console.log("String typed out!");
                })

                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </div>

        <p className="text-lg text-gray-600 px-20 mb-8">
          Our platform utilizes advanced machine learning algorithms to analyze
          your health data and provide personalized insights into your lung
          cancer risk. Early detection is crucial for successful treatment, and
          our tool empowers you to take proactive steps towards your health.
        </p>
        <div id="healthTips"></div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={(e) => {
            navigate("/details");
          }}
        >
          Analyze Yourself
        </button>
      </div>
      <div className=" pt-10  bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% container mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-4">
          Health Tips to Prevent Lung Cancer
        </h2>
        <p className="text-lg text-gray-600 px-20 mb-8">
          Here are some simple yet effective tips to reduce your risk of lung
          cancer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pb-24">
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <i className="fas fa-ban text-2xl text-red-500 mb-2"></i>
            <h3 className="text-xl font-bold mb-2">Don't Smoke</h3>
            <p className="text-gray-600">
              Smoking is the leading cause of lung cancer. Quitting smoking is
              the best thing you can do for your health.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <i className="fas fa-lungs text-2xl text-blue-500 mb-2"></i>
            <h3 className="text-xl font-bold mb-2">Avoid Secondhand Smoke</h3>
            <p className="text-gray-600">
              Breathing in secondhand smoke can also increase your risk of lung
              cancer. Avoid areas where people are smoking.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <i className="fas fa-utensils text-2xl text-green-500 mb-2"></i>
            <h3 className="text-xl font-bold mb-2">Eat a Healthy Diet</h3>
            <p className="text-gray-600">
              A diet rich in fruits, vegetables, and whole grains can help
              reduce your risk of lung cancer.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <i className="fas fa-weight-hanging text-2xl text-orange-500 mb-2"></i>
            <h3 className="text-xl font-bold mb-2">
              Maintain a Healthy Weight
            </h3>
            <p className="text-gray-600">
              Being overweight or obese can increase your risk of lung cancer.
              Aim for a healthy weight through diet and exercise.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <i className="fas fa-running text-2xl text-purple-500 mb-2"></i>
            <h3 className="text-xl font-bold mb-2">Get Regular Exercise</h3>
            <p className="text-gray-600">
              Regular physical activity can help reduce your risk of lung
              cancer. Aim for at least 30 minutes of moderate-intensity exercise
              most days of the week.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <i className="fas fa-stethoscope text-2xl text-gray-500 mb-2"></i>
            <h3 className="text-xl font-bold mb-2">Get Screened</h3>
            <p className="text-gray-600">
              Talk to your doctor about getting screened for lung cancer if you
              are at high risk.
            </p>
          </div>
        </div>
      </div>
      <div
        className="aboutUs  bg-gradient-to-r pb-24 from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% container mx-auto p-4 flex flex-col items-center justify-center"
        id="aboutUs"
      >
        <h2 className="text-3xl font-bold text-center mb-4 ">About Us</h2>
        <p className="text-lg text-gray-600 px-20 mb-8">
          We are a team of passionate individuals dedicated to improving lung
          cancer awareness and prevention. Our mission is to empower individuals
          with the knowledge and tools they need to take control of their
          health.
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.n5CeR93916slWXGyV13PuAHaHa&pid=Api&P=0&h=180"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mx-auto mb-2"
            />
            <h3 className="text-xl font-bold mb-2">Shyama</h3>
            <p className="text-gray-600">Data Scientist</p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.EVCGXvrjsvMrhfOX3su_FgHaHa&pid=Api&P=0&h=180"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mx-auto mb-2"
            />
            <h3 className="text-xl font-bold mb-2">Raj</h3>
            <p className="text-gray-600">Machine Learning Engineer</p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Ymp2QykpzP3rfqFkAzDjHgAAAA&pid=Api&P=0&h=180"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mx-auto mb-2"
            />
            <h3 className="text-xl font-bold mb-2">Sharma</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-r from-emerald-200 from-10% via-sky-300 via-30% to-indigo-200 to-90%  text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Lung Cancer Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
