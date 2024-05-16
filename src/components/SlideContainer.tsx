import * as React from 'react';
import { css } from '@pigment-css/react';

export default function SlideContainer({
  children,
  leftAligned,
  noBgColor,
  noHeight,
}: {
  children: React.ReactNode;
  leftAligned?: boolean;
  noBgColor?: boolean;
  noHeight?: boolean;
}) {
  return (
    <div
      className={css({
        paddingBottom: '80px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      })}
      style={{
        height: noHeight ? 'auto' : '100vh',
        padding: leftAligned ? '4rem' : undefined,
        alignItems: leftAligned ? 'start' : 'center',
        justifyContent: leftAligned ? 'start' : 'center',
        backgroundColor: noBgColor ? 'transparent' : '#000',
      }}
    >
      {children}
    </div>
  );
}
