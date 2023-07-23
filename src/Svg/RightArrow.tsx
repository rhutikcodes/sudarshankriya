import { NextPage } from "next";

type Props = {};

const RightArrow: NextPage<Props> = ({ }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      style={{ display: "inline-block" }}
    >
      <path
        fill="#fff"
        d="m14 17.95-1.075-1.05 4.2-4.2H4v-1.5h13.125L12.9 6.975l1.075-1.05L20 11.95l-6 6Z"
      />
    </svg>
  );
};

export default RightArrow;
