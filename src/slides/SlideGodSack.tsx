import * as React from 'react';
import { css } from '@pigment-css/react';
import { DeckContext } from 'spectacle';

export default function SlideGodSack() {
  const deckContext = React.useContext(DeckContext);
  const ref = React.useRef<HTMLVideoElement>(null);
  const active = deckContext.activeView.slideIndex === 28;
  const presenterMode = new URLSearchParams(window.location.search).get('presenterMode') === 'true';
  React.useEffect(() => {
    if(presenterMode) {
      return;
    }
    if (active) {
      ref.current!.currentTime = 0;
      ref.current!.play();
    } else {
      ref.current!.pause();
    }
  }, [active, presenterMode]);
  return (
    <video
    ref={ref}
    playsInline
    className={css({
      width: '100%',
      margin: '0 auto',
    })}
    >
      <source src="/images/anotherone.mp4" type="video/mp4"></source>
    </video>
  );
}
