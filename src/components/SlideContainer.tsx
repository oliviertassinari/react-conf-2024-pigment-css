import * as React from 'react';
import { css } from '@pigment-css/react';

export default function SlideContainer({
  children,
  noBgColor,
}: {
  children: React.ReactNode;
  noBgColor?: boolean;
}) {
  return (
    <div
      className={css({
        height: '100lvh',
        paddingBottom: '80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      })}
      style={{ backgroundColor: noBgColor ? 'transparent' : '#000' }}
    >
      {children}
    </div>
  );
}
