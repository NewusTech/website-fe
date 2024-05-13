const AboutUsIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="17"
      height="9"
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.35095 0L0.5 9H2.02513L6.35095 2.36424L10.649 9L13.5745 4.5L16.5 0H14.9887L10.649 6.63576L6.35095 0Z"
        fill="currentColor"
        className={color}
      />
      <path
        d="M11.9939 0L9.65078 3.59603L10.3856 4.74834L13.4913 0H11.9939Z"
        fill="currentColor"
        className={color}
      />
      <path
        d="M6.35095 4.27152L3.2591 9H4.7565L6.35095 6.55629L7.91768 9H9.42894L6.35095 4.27152Z"
        fill="currentColor"
        className={color}
      />
    </svg>
  );
};

export default AboutUsIcon;
