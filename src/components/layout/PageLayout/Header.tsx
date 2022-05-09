import { forwardRef, ForwardRefRenderFunction } from 'react';
import classnames from 'classnames';
import { Icon } from '@/components/common';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

type Props = {
  fixed?: boolean;
  transparent?: boolean;
  headerHeight: string;
  headerNavPos: string;
};

const Header: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { fixed = false, transparent = false, headerHeight, headerNavPos },
  ref,
) => {
  return (
    <header
      ref={ref}
      className={classnames(
        `z-[999] flex justify-between items-center w-full h-full top-0 px-3 py-3 bg-primary dark:bg-gray-900`,
        fixed ? 'fixed' : 'absolute',
        transparent ? 'transparent' : 'bg-gray-300 dark:bg-gray-700',
        headerHeight,
      )}
    >
      <div className="h-full">
        <Link to="/">
          <Icon name="logo" />
        </Link>
      </div>
      <div className="h-full">
        <Navigation topPosition={headerNavPos} />
      </div>
    </header>
  );
};

export default forwardRef(Header);
