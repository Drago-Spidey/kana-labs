import React, { useEffect, useState } from "react";

const TimeBar = () => {
  const [time, setTime] = useState("00:00:00");
  const [progress, setProgress] = useState(0);

  // Dynamically calculate the current hour range
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = new Date();
      const currentHour = now.getHours(); // Get the current hour

      // Calculate start and end of the current hour
      const startTime = new Date();
      startTime.setHours(currentHour, 0, 0, 0); // Start of current hour (e.g., 3:00 if current time is 3:25)

      const endTime = new Date();
      endTime.setHours(currentHour + 1, 0, 0, 0); // End of the current hour (e.g., 4:00 if current time is 3:25)

      // Convert Date objects to milliseconds
      const totalDuration = endTime.getTime() - startTime.getTime(); // Total duration between start and end
      const timeElapsed = now.getTime() - startTime.getTime(); // Time elapsed from start to now

      // Calculate the percentage of time passed
      const percentage = Math.min((timeElapsed / totalDuration) * 100, 100); // Ensure it doesn’t go over 100%

      // Update time and progress
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
      setProgress(percentage);
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup interval
  }, []);

  // Get current hour range (for labels)
  const currentHour = new Date().getHours();
  const startHourLabel = new Date();
  const endHourLabel = new Date();
  startHourLabel.setHours(currentHour, 0, 0, 0); // Start of the hour
  endHourLabel.setHours(currentHour + 1, 0, 0, 0); // End of the hour

  const formatTime = (date: Date) =>
    `${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}:00 ${
      date.getHours() >= 12 ? "PM" : "AM"
    }`;

  return (
    <div className="flex flex-col w-full p-4 gap-2 border-y border-white/10">
      {/* Progress Bar */}
      <div className="w-full rounded-full h-[10px] bg-klb">
        <div
          className="bg-klc h-[10px] rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }} // Adjust width dynamically
        ></div>
      </div>

      {/* Time labels and current time */}
      <div className="text-white text-sm flex flex-row justify-between">
        <span className="font-normal">{formatTime(startHourLabel)}</span>
        <span className="font-extrabold">{time}</span>
        <span className="font-normal">{formatTime(endHourLabel)}</span>
      </div>
    </div>
  );
};

export default TimeBar;
