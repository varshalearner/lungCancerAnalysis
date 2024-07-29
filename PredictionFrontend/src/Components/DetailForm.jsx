import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: null,
    smoking: "",
    yellow_fingers: "",
    anxiety: "",
    peer_pressure: "",
    chronic_diseases: "",
    fatigue: "",
    allergy: "",
    wheezing: "",
    alcohol_consuming: "",
    coughing: "",
    shortness_of_breath: "",
    swallowing_difficulty: "",
    chest_pain: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="rounded-r-lg px-2 lg:pl-16 py-2 flex flex-col items-center">
       <div className="navbar  py-6 fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 flex justify-between items-center">
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
      <ul className="menulist flex gap-4 pr-60 text-white font-bold">
          <li>
            <a
              onClick={(e) => {
                navigate("/");
              }}
            
            >
              home
            </a>
          </li>
         
        </ul>
      
      </div>
      <div className="text-center mt-20">
        <h2 className="heading text-primaryColor">Patient Detail Info</h2>
        <p className="text__para">
          Please fill the form correctly to get the accurate result
        </p>
      </div>
      <form action="" className="py-4 md:py-0  lg:w-1/2">
        <div className="mb-2">
          <input
            className="form-inp"
            type="name"
            placeholder="Patient Full Name"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <div className="mb-2">
          <input
            className="form-inp"
            type="age"
            placeholder="Patient's Age"
            name="age"
            value={formData.age}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="gender"
              className="text-headingColor font-bold leading-7"
            >
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="smoking"
              className="text-headingColor font-bold leading-7"
            >
              Are you a Smoker:
            </label>
            <select
              name="smoking"
              id="smoking"
              value={formData.smoking}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="yellow_fingers"
              className="text-headingColor font-bold leading-7"
            >
              Do you have yellow fingers:
            </label>
            <select
              name="yellow_fingers"
              id="yellow_fingers"
              value={formData.yellow_fingers}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="anxiety"
              className="text-headingColor font-bold leading-7"
            >
              Do you have anxiety:
            </label>
            <select
              name="anxiety"
              id="anxiety"
              value={formData.anxiety}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="peer_pressure"
              className="text-headingColor font-bold leading-7"
            >
              Do you have peer pressure:
            </label>
            <select
              name="peer_pressure"
              id="peer_pressure"
              value={formData.peer_pressure}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="chronic_diseases"
              className="text-headingColor font-bold leading-7"
            >
              Do you have chronic diseases:
            </label>
            <select
              name="chronic_diseases"
              id="chronic_diseases"
              value={formData.chronic_diseases}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="fatigue"
              className="text-headingColor font-bold leading-7"
            >
              Do you have fatigue:
            </label>
            <select
              name="fatigue"
              id="fatigue"
              value={formData.peer_pressure}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="allergy"
              className="text-headingColor font-bold leading-7"
            >
              Do you have allergy:
            </label>
            <select
              name="allergy"
              id="allergy"
              value={formData.allergy}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="wheezing"
              className="text-headingColor font-bold leading-7"
            >
              Do you have wheezing:
            </label>
            <select
              name="wheezing"
              id="wheezing"
              value={formData.wheezing}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="alcohol_consuming"
              className="text-headingColor font-bold leading-7"
            >
              Do you consume alcohol:
            </label>
            <select
              name="alcohol_consuming"
              id="alcohol_consuming"
              value={formData.alcohol_consuming}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="coughing"
              className="text-headingColor font-bold leading-7"
            >
              Do you have cough:
            </label>
            <select
              name="coughing"
              id="coughing"
              value={formData.wheezing}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="shortness_of_breath"
              className="text-headingColor font-bold leading-7"
            >
              Do you have shortness of breath:
            </label>
            <select
              name="alcohol_consuming"
              id="alcohol_consuming"
              value={formData.shortness_of_breath}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
          <div>
            <label
              htmlFor="swallowing_difficulty"
              className="text-headingColor font-bold leading-7"
            >
              Do you have difficulty in swallowing:
            </label>
            <select
              name="swallowing_difficulty"
              id="swallowing_difficulty"
              value={formData.swallowing_difficulty}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="chest_pain"
              className="text-headingColor font-bold leading-7"
            >
              Do you hev chest pain:
            </label>
            <select
              name="chest_pain"
              id="chest_pain"
              value={formData.chest_pain}
              onChange={(e) => handleInputChange(e)}
              className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
              </div>
              
              <button className="btn w-full font-semibold text-[20px]">Analyse</button>
      </form>
    </div>
  );
};

export default DetailForm;
