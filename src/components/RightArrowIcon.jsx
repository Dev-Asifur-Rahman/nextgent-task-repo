

const RightArrowIcon = () => {
  return (
    <button className="group flex items-center relative w-20 hover:text-white right-arrow-icon lg:opacity-70 md:opacity-70 text-white  lg:hover:opacity-100 md:hover:opacity-100 opacity-100">
      <span className="block h-[px] w-14 bg-current transition-all duration-300 ease-out group-hover:w-18 border absolute right-[11px]"></span>

      <svg
        className="w-6 h-6 transition-transform duration-300 ease-out  relative left-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default RightArrowIcon;
