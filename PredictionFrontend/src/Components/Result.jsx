import React from 'react';

const ResultPage = ({ prediction }) => {
  let message;
  let riskLevel;
  let healthTips;

  if (prediction === 'low') {
    riskLevel = 'Low';
    message = (
      <>
        <p className="text-green-500 font-bold">Based on the information provided, your risk of lung cancer appears to be low.</p>
        <p>However, it's important to maintain a healthy lifestyle and consult your doctor for regular checkups.</p>
      </>
    );
    healthTips = (
        <>
          <h2>Health Tips to Prevent Lung Cancer:</h2>
          <ul>
            <li>Don't smoke.</li>
            <li>Avoid secondhand smoke.</li>
            <li>Eat a healthy diet rich in fruits and vegetables.</li>
            <li>Maintain a healthy weight.</li>
            <li>Get regular exercise.</li>
            <li>Get screened for lung cancer if you are at high risk.</li>
          </ul>
        </>
      );
  }  else {
    riskLevel = 'High';
    message = (
      <>
        <p className="text-red-500 font-bold">The prediction suggests a higher risk of lung cancer.</p>
        <p>It's crucial to consult your doctor immediately for a proper diagnosis and discuss potential treatment options.</p>
      </>
    );
    
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Lung Cancer Risk Assessment</h1>
    
      {/* <div className="w-70"> */}

     
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Your Risk Level: <span className="text-blue-500">{riskLevel}</span></h2>
          <p className="text-lg mb-4">{message}</p>
          <div className='text-black'>
        {healthTips}
      </div>
          <p className="text-gray-600">
            This information is for general guidance only and should not be considered a substitute for professional medical advice. Please consult your doctor for a personalized assessment and treatment plan.
          </p>
        </div>
        <div className='w-60'>{
            prediction=="low"? <img src="https://www.fisdom.com/wp-content/uploads/2021/06/6-5.jpg" alt="" />: <img src="https://nyalliance.starchapter.com/images/RISK.png" alt="" />}
           
        </div>
        
      </div>
    
      </div>
    // </div>
  );
};

export default ResultPage;
