const ListIcon = ({ color }: { color: string }) => {
  return (
    <svg
      className={color}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_115_2554)">
        <path
          d="M3.25 15.625H22.75V13.5417H3.25V15.625ZM3.25 19.7917H22.75V17.7084H3.25V19.7917ZM3.25 11.4584H22.75V9.37504H3.25V11.4584ZM3.25 5.20837V7.29171H22.75V5.20837H3.25Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_2554">
          <rect width="26" height="25" rx="2" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ListIcon;
