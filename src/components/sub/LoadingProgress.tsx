import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const LoadingIndicator = ({ loading }: { loading: boolean }) => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(loading);
  useEffect(() => {
    setLoadingComplete(loading);
  }, [loading]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingComplete) {
        setProgress((prevProgress) => {
          var increase = 10;
          if (prevProgress > 50) increase = 5;
          if (prevProgress >= 90) {
            clearInterval(interval);
            setLoadingComplete(true);
            return 95;
          }
          return prevProgress + increase; // Tăng tiến trình lên 10% sau mỗi lần interval
        });
      } else {
        setProgress(100);
      }
    }, 500); // Thời gian cập nhật tiến trình (ms)

    return () => clearInterval(interval);
  }, [loadingComplete]);

  return (
    <div className="text-center">
      <ProgressBar now={progress} animated={true} />
    </div>
  );
};

export default LoadingIndicator;
