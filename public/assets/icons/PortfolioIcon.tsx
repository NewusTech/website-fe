const PortfolioIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_464_408)">
        <path
          d="M11.375 6.375V10.5H1.625V6.375M6.5 8.25V6.75M8 3C8 3 8 1.5 6.5 1.5C5 1.5 5 3 5 3M1.25 3H11.75V6C11.75 6 9.5 7.5 6.5 7.5C3.5 7.5 1.25 6 1.25 6V3Z"
          stroke="currentColor"
          className={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_464_408">
          <rect
            width="12"
            height="12"
            fill="currentColor"
            className={color}
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PortfolioIcon;
