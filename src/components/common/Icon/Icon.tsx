import React, { FC, memo, useMemo } from 'react';
import HamburgerSVG from '@/assets/Hamburger';
import LogoSVG from '@/assets/Logo';
import SettingSVG from '../../../assets/Setting';
import { SvgProps } from '@/core/interface/svg-props';

export type SVGTypes = 'hamburger' | 'settings' | 'logo';

type IconProps = {
  name: SVGTypes;
};

const Icon: FC<IconProps & SvgProps> = ({ name, ...props }) => {
  const IconWrapper = useMemo(() => {
    const _IconSelector: { [keys in SVGTypes]: JSX.Element } = {
      hamburger: <HamburgerSVG {...props} />,
      settings: <SettingSVG {...props} />,
      logo: <LogoSVG {...props} />,
    };

    return _IconSelector[name];
  }, [name, props]);

  return <>{IconWrapper}</>;
};

export default memo(Icon);
