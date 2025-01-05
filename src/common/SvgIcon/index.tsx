// import { SvgIconProps } from "../types";

// export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
//   <img src={`/img/svg/${src}`} alt={src} width={width} height={height}  />
// );

import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
  </div>
);


// import { SvgIconProps } from "../types";

// export const SvgIcon = ({ src, width, height, style, className }: SvgIconProps) => (
//   <img
//     src={`/img/svg/${src}`}
//     alt={src}
//     width={width}
//     height={height}
//     style={style}
//     className={className}
//   />
// );
