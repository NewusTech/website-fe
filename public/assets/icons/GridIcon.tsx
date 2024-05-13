const GridIcon = ({ color }: { color: string }) => {
  return (
    <svg
      className={color}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 19H12.5V10.8571H21.5V19ZM9.5 19H0.5V10.8571H9.5V19ZM21.5 8.14286H12.5V0H21.5V8.14286ZM9.5 8.14286H0.5V0H9.5V8.14286Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default GridIcon;
