import { motion } from 'framer-motion';
import { SVGMotionProps } from 'framer-motion/types/render/svg/types';

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    width="100%"
    height="100%"
    {...props}
  />
);

export default Path;
