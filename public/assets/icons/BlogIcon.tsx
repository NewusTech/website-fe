const BlogIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.634 1.21999L11.48 2.06599C11.714 2.29999 11.714 2.67799 11.48 2.91199L8.90005 5.49799V11.3H2.30005V2.29999H8.70205L9.78205 1.21999C10.022 0.985993 10.4 0.979993 10.634 1.21999ZM7.23805 6.30799L10.46 3.09199L9.60805 2.23999L6.39205 5.46199L5.96605 6.73399L7.23805 6.30799Z"
        fill="currentColor"
        className={color}
      />
    </svg>
  );
};

export default BlogIcon;
