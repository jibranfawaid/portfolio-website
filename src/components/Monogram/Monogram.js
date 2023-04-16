import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
         fill="#000000" stroke="none">
        <path d="M480 2012 c-29 -6 -36 -12 -38 -34 -3 -23 1 -28 17 -28 34 0 127 -39
149 -63 34 -36 35 -89 13 -397 -52 -711 -50 -874 9 -1033 68 -181 245 -264
508 -237 223 23 408 107 577 262 78 72 173 194 217 281 28 56 28 60 11 73 -10
7 -21 14 -24 14 -4 0 -25 -24 -48 -54 -100 -134 -269 -270 -414 -336 -125 -57
-231 -82 -368 -87 -165 -7 -224 8 -290 76 -34 35 -50 63 -65 112 -53 176 9
1031 86 1198 17 35 30 72 30 83 0 29 -88 111 -155 143 -62 31 -143 41 -215 27z"/>
        <path d="M1391 1871 c-9 -16 -4 -23 32 -47 74 -48 135 -105 212 -195 41 -48
83 -90 94 -94 64 -20 84 70 33 141 -57 78 -149 141 -276 189 -80 30 -83 30
-95 6z"/>
        <path d="M1181 1681 c-9 -15 -6 -22 13 -34 46 -30 149 -132 205 -202 76 -95
87 -105 119 -105 36 0 52 17 52 53 0 79 -96 177 -251 256 -55 28 -106 51 -114
51 -8 0 -19 -9 -24 -19z"/>
      </g>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
