import * as React from 'react';
import { styled, css, keyframes } from '@pigment-css/react';
import PigmentLogo from './PigmentLogo';

const scale = keyframes({
  to: { scale: 'var(--scale)' },
});

const Bubble = styled('span')({
  height: 'var(--size, 100%)',
  aspectRatio: '1',
  background: 'radial-gradient(hsl(var(--hue) 100% 70%) 25%, transparent 50%)',
  position: 'absolute',
  display: 'inline-block',
  left: 'var(--x, 0)',
  top: 'var(--y, 0)',
  scale: '0',
  translate: '-50% -50%',
  mixBlendMode: 'multiply',
  filter: 'blur(8px)',
  animation: `${scale} var(--start, 4s) var(--duration, 0s) infinite alternate`,
});

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let index = -1;

// function generateBubbleVars() {
//   index += 1;
//   return {
//     '--x': `${randomBetween(0, 100)}%`,
//     '--y': `${randomBetween(15, 85)}%`,
//     '--hue': `${randomBetween(0, 360)}`,
//     '--scale': `${randomBetween(2, 6)}`,
//     '--duration': `-${randomBetween(250, 400) / 100}s`,
//     '--start': `${randomBetween(1, 5)}s`,
//   } as any;
// }

// A set of values I love
function generateBubbleVars() {
  index += 1;
  return {
    '--x': `${[10, 5, 10, 100, 23, 50][index]}%`,
    '--y': `${[34, 50, 37, 50, 44, 45][index]}%`,
    '--hue': [200, 180, 210, 215, 220, 225][index],
    '--scale': `${[1, 2, 3, 6, 2, 2][index]}`,
    '--duration': `-${[100, 10, 3.12, 2.72, 3.15, 3.23][index]}s`,
    '--start': `${[8, 4, 1, 3, 4, 3][index]}s`,
  } as any;
}

export default function Slide1() {
  return (
    <main
      className={css({
        height: '100lvh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        paddingBottom: '50px',
        border: '1px solid',
        borderColor: 'hsla(100 0% 15%)',
        borderRadius: '0.5rem',
        background: 'linear-gradient(250deg, hsla(210 100% 12% / 0.5) 40%, hsl(200 20% 2%) 62%)',
      })}
    >
      <h1
        className={css(({ theme }) => ({
          all: 'unset',
          position: 'relative',
          display: 'flex',
          // flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          color: '#888',
          '> svg': {
            marginTop: '14px',
          },
          fontFamily: theme.typography.fontFamilyTagline,
          fontSize: '5rem',
          fontWeight: 500,
          letterSpacing: '-0.1rem',
          textAlign: 'center',
          ...theme.applyStyles('dark', { color: '#fff' }),
        }))}
      >
        <PigmentLogo />
        Pigment CSS
        <span
          className={css(({ theme }) => ({
            position: 'absolute',
            inset: '0',
            backgroundColor: '#fff',
            mixBlendMode: 'color-burn',
            overflow: 'hidden',
            pointerEvents: 'none',
            ...theme.applyStyles('dark', {
              mixBlendMode: 'darken',
              filter: 'brightness(1)',
            }),
          }))}
        >
          <Bubble className={css(generateBubbleVars())} />
          <Bubble className={css(generateBubbleVars())} />
          <Bubble className={css(generateBubbleVars())} />
          <Bubble className={css(generateBubbleVars())} />
          <Bubble className={css(generateBubbleVars())} />
          <Bubble className={css(generateBubbleVars())} />
        </span>
      </h1>
      <div
        className={css(({ theme }) => ({
          fontFamily: theme.typography.fontFamily,
          opacity: 0.8,
          textAlign: 'center',
          textWrap: 'balance',
          fontSize: '1.4rem',
        }))}
      >
        CSS-in-JS in the server components age
      </div>
      <div
        className={css(({ theme }) => ({
          position: 'absolute',
          bottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          fontFamily: theme.typography.fontFamily,
          fontSize: '0.875rem',
          '> img': {
            borderRadius: 999,
            border: '4px solid',
            borderColor: 'hsla(210 100% 50% / 0.3)',
          },
        }))}
      >
        <img
          src="https://ca.slack-edge.com/TS83SPSTV-USKHJJQFJ-66647fe884c4-512"
          width="40"
          height="40"
        />
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          })}
        >
          <p className={css({ margin: 0, fontWeight: 500 })}>Olivier Tassinari</p>
          <p className={css({ margin: 0, opacity: 0.5 })}>Co-Founder and CEO @ MUI</p>
        </div>
      </div>
    </main>
  );
}
