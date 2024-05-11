import { css } from '@pigment-css/react';
import { FullScreen } from 'spectacle';

export function Template() {
  return (
    <div
      className={`Template-root ${css({
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        opacity: 0,
        height: 45,
        alignItems: 'center',
        pointerEvents: 'all',
        transition: 'opacity 200ms ease',
        '&:hover': {
          opacity: 1,
        },
      })}`}
    >
      <div className={css({ padding: '8px 12px', cursor: 'pointer' })}>
        <FullScreen />
      </div>
    </div>
  );
}