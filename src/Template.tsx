import * as React from 'react';
import { css } from '@pigment-css/react';
import { DeckContext, FullScreen } from 'spectacle';

export function Template() {
  const deckContext = React.useContext(DeckContext);
  console.log('deckContext', deckContext.activeView);
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
        zIndex: 1,
        alignItems: 'center',
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