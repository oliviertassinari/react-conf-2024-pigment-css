import * as React from 'react';
import { css, styled } from '@pigment-css/react';
import { DeckContext, FullScreen } from 'spectacle';

// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
// A pseudorandom number generator
function splitmix32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x9e3779b9) | 0;
    let t = seed ^ (seed >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
  };
}

const Spot = styled('span')({
  top: '50%',
  left: '50%',
  height: 800,
  width: 800,
  translate: '-50% -50%',
  background: 'radial-gradient(hsla(var(--hue) 100% 8%) 40%, hsl(210 20% 2%) 62%, transparent 80%)',
  position: 'absolute',
  transition: 'all 3s ease',
  mixBlendMode: 'lighten',
});

function randomBetween(random: number, min: number, max: number) {
  return Math.floor(random * (max - min + 1) + min);
}

export function Template() {
  const deckContext = React.useContext(DeckContext);
  // console.log('deckContext', deckContext.activeView.slideIndex);
  const randomGenerator = splitmix32(deckContext.activeView.slideIndex);
  return (
    <div className="Template-root">
      <div
        className={`Template-background ${css({
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          filter: 'blur(70px)',
        })}`}
        style={{
          opacity: deckContext.activeView.slideIndex === 0 ? 0 : 0.75,
        }}
      >
        <Spot
          style={
            {
              top: `${randomBetween(randomGenerator(), 0, 100)}%`,
              left: `${randomBetween(randomGenerator(), 80, 100)}%`,
              '--hue': randomBetween(randomGenerator(), 200, 230),
            } as React.CSSProperties
          }
        />
        <Spot
          style={
            {
              top: `${randomBetween(randomGenerator(), 0, 100)}%`,
              left: `${randomBetween(randomGenerator(), 0, 100)}%`,
              '--hue': randomBetween(randomGenerator(), 200, 230),
            } as React.CSSProperties
          }
        />
      </div>
      {/* Foreground */}
      <div
        className={`Template-foreground ${css({
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          opacity: 0,
          height: 45,
          zIndex: 1,
          transition: 'opacity 100ms ease',
          '&:hover': {
            opacity: 1,
          },
        })}`}
      >
        <div className={css({ padding: '8px 12px', cursor: 'pointer' })}>
          <FullScreen />
        </div>
      </div>
    </div>
  );
}
