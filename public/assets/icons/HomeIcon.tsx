const HomeIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_464_522)">
        <path
          d="M5.8 12V7.76471H8.2V12H11.2V6.35294H13L7 0L1 6.35294H2.8V12H5.8Z"
          fill="currentColor"
          className={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_464_522">
          <rect
            width="12"
            height="12"
            fill="currentColor"
            transform="translate(0.5)"
            className={color}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default HomeIcon;
