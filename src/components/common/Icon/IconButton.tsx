import { SvgProps } from '@/core/interface/svg-props';
import { motion, MotionProps } from 'framer-motion';
import React, { FC } from 'react';
import Icon, { SVGTypes } from './Icon';

export type IconButtonProps = {
  name: SVGTypes;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
};

const IconButton: FC<IconButtonProps & MotionProps & SvgProps> = ({
  type = 'button',
  onClick,
  ...props
}) => {
  return (
    <motion.button type={type} onClick={onClick} className="h-full">
      <Icon {...props} />
    </motion.button>
  );
};

export default IconButton;
