interface xaiProps {
  textColor?: string;
}
export const Xai = (xaiProps: xaiProps) => {
  return (
    <svg
    className="text-black"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="38"
      height="38"
      viewBox="0,0,256,256"
    >
      <g
        fill={xaiProps.textColor || "#fdfdfd"}
        fill-rule="evenodd"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M24.032,28.919l16.113,-22.93h-7l-12.627,17.969z"></path>
          <path d="M14.591,32.393l-7.446,10.596h7l3.96,-5.635z"></path>
          <path d="M14.547,18.989h-7l17,24h7z"></path>
          <path d="M35,16.789v26.211h6v-34.749z"></path>
        </g>
      </g>
    </svg>
  );
};
