import React, { useState, useEffect } from 'react';

interface CustomAlertProps {
  message: string;
  type: 'success' | 'error';
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, 50); // Update setiap 50ms untuk durasi total 5 detik

    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const alertStyles = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const progressStyles = type === 'success' ? 'bg-green-700' : 'bg-red-700';

  return (
    <div
      className={`fixed top-4 right-4 ${alertStyles} text-white py-2 px-4 rounded transition-opacity duration-500 shadow-lg z-50 ${show ? 'opacity-100' : 'opacity-0'}`}
      style={{ width: 'auto' }}
    >
      <div className="flex justify-between items-center">
        <span className='capitalize'>{message}</span>
        <button
          className="ml-4 text-lg font-bold"
          onClick={() => setShow(false)}
        >
          &times;
        </button>
      </div>
      <div className="w-full bg-opacity-50 rounded-full mt-2">
        <div
          className={`${progressStyles} h-1 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CustomAlert;
