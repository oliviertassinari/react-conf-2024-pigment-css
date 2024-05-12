import * as React from 'react';
import { css } from '@pigment-css/react';

export const Backdrop = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Backdrop(props, ref) {
    const { children, className, ...other } = props;
    return (
      <div
        ref={ref}
        className={`Backdrop-root ${className} ${css({
          backgroundColor: '#000',
          '& .sc-aXZVg': {
            zIndex: 'initial !important',
            position: 'initial !important',
            pointerEvents: 'initial !important',
            // TODO wait for https://github.com/mui/pigment-css/issues/77 to be fixed
          } as any,
        })}`}
        {...other}
      >
        {children}
      </div>
    );
  },
);
