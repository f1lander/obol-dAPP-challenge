export const Button = ({ disabled, className, onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`px-6 py-3 bg-teal-500 opacity-90 outline-none rounded-lg text-black font-bold hover:bg-teal-400 hover:opacity-100 disabled:cursor-not-allowed disabled:bg-black disabled:border-2 disabled:border-gray-900 disabled:text-gray-900 ${
        className ? className : ""
      }
    `}
    >
      {children}
    </button>
  );
};
