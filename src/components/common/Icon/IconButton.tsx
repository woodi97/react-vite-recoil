import { motion, MotionProps } from 'framer-motion';
import React, { FC } from 'react';
import Icon, { SVGTypes } from './Icon';

interface IconButtonProps extends MotionProps {
  name: SVGTypes;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

const IconButton: FC<IconButtonProps> = ({
  name,
  type = 'button',
  ...props
}) => {
  return (
    <motion.button type={type} {...props} className="h-full">
      <Icon name={name} />
    </motion.button>
  );
};

export default IconButton;
