export default function Button({ color, children }) {
  const colorClasses = {
    red: "border-button-red text-button-red",
    green: "border-button-green text-button-green",
    yellow: "border-button-yellow text-button-yellow",
  };

  const selectedColor = colorClasses[color] || "";
  return (
    <button
      className={`w-auto h-[23px] px-2 font-sans font-normal rounded-[4px] border-1 ${selectedColor}`}
    >
      {children}
    </button>
  );
}
