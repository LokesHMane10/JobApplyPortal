import React, { useState, useEffect, useRef } from "react";
import "./Activeusers.css";

const skills = [
  { name: "Jobs Posted", progress: 123455 },
  { name: "Jobs Filled", progress: 91282 },
  { name: "Employers", progress: 88291 },
  { name: "Active Users", progress: 1234758 },
];

const CircularProgress = ({
  progress,
  size = 100,
  strokeWidth = 0,
  duration = 0.5,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimatedProgress(0);
      setDisplayedProgress(0);

      setTimeout(() => {
        setAnimatedProgress(progress);
      }, 100);

      let start = 0;
      const durationMs = 1000;
      const steps = Math.min(progress, 100);
      const stepTime = durationMs / steps;
      const increment = progress / steps;

      const interval = setInterval(() => {
        start += increment;
        setDisplayedProgress(Math.floor(start));
        if (start >= progress) {
          setDisplayedProgress(progress);
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible, progress]);

  const offset = circumference - (animatedProgress / 100) * circumference;

  return (
    <div ref={progressRef}>
      <svg width={size} height={size} className="circular-progress">
        <circle
          className="progress-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-bar"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: `stroke-dashoffset ${duration}s ease-in-out` }}
        />
        <text className="progress-text" x="50%" y="50%">
          {displayedProgress}
        </text>
      </svg>
    </div>
  );
};

const Activeusers = () => {
  return (
    <div className="progress-wrapper">
      {skills.map((skill) => (
        <div className="progress-container" key={skill.name}>
          <CircularProgress progress={skill.progress} />
          <div className="skills">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Activeusers;
