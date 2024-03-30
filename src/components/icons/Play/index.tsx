interface PlayIconProps {
  id: string;
}

export const PlayIcon = ({ id }: PlayIconProps) => {
  return (
    <svg
      id={id}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 3.21887L19 12.2189L5 21.2189V3.21887Z"
        stroke="#949EA2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
