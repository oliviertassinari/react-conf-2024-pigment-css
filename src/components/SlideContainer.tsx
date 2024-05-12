import { css } from '@pigment-css/react';
import React from 'react';

export default function SlideContainer({
  children,
  noBgColor,
}: {
  children: React.ReactNode;
  noBgColor?: boolean;
}) {
  return (
    <main
      className={css({
        height: '100lvh',
        paddingBottom: '50px',
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
    </main>
  );
}
