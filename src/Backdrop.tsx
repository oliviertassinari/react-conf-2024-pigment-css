import * as React from 'react';
import { css } from '@pigment-css/react';

export const Backdrop = React.forwardRef(function Backdrop(props, ref) {
  const { children, className, ...other } = props;
  return (
    <div
      ref={ref}
      className={`Backdrop-root ${className} ${css({
        backgroundColor: '#000',
        '& .idnhTW': {
          zIndex: 'initial !important',
          position: 'initial !important',
          pointerEvents: 'initial !important',
        }
      })}`}
      {...other}
    >
      {children}
    </div>
  );
});