const CircularProgress = ({
  percentage,
  className = "absolute -bottom-7 left-5 flex items-center justify-center w-14 h-14",
}) => {
  const score = (percentage * 10).toFixed(1);
  let color = "";
  if (score >= 70 && score <= 100) {
    color = "#2BFE6B";
  } else if (score < 70 && score >= 50) {
    color = "#F4FE60";
  } else {
    color = "#FB4949";
  }
  const radius = 30; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo
  const offset = circumference - (score / 100) * circumference; // Offset para el stroke-dasharray

  return (
    <div className={className}>
      <svg
        className="absolute transform -rotate-90"
        width="70"
        height="70"
        viewBox="0 0 70 70"
      >
        <circle
          stroke="gray"
          fill="none"
          cx="35"
          cy="35"
          r={radius}
          strokeWidth="5"
        />
        <circle
          stroke={color}
          fill="none"
          cx="35"
          cy="35"
          r={radius}
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.35s",
            transformOrigin: "center",
          }}
        />
      </svg>
      <div className=" text-sm rounded-full bg-gray-700 text-white font-bold flex items-center justify-center w-14 h-14">
        {`${score}%`}
      </div>
    </div>
  );
};
export default CircularProgress;
