import React, { FC } from 'react';
import { motion, MotionProps, SVGMotionProps } from 'framer-motion';

const SVG: FC<
  {
    className?: string;
    children: React.ReactNode;
    viewBox: string;
    fill?: string;
    width?: number | string;
    height?: number | string;
  } & MotionProps
> = ({
  children,
  width = '100%',
  height = '100%',
  ...props
}: JSX.IntrinsicAttributes &
  SVGMotionProps<SVGSVGElement> &
  React.RefAttributes<SVGSVGElement>) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width={width}
    height={height}
    {...props}
  >
    {children}
  </motion.svg>
);

export default SVG;
