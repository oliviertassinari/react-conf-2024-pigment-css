import * as React from 'react';
import { styled, css, keyframes } from '@pigment-css/react';

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
  filter: 'blur(2px)',
  animation: `${scale} var(--start, 2s) var(--duration, 0s) infinite alternate`,
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
    '--x': `${[77, 2, 10, 13, 23, 34][index]}%`,
    '--y': `${[34, 57, 37, 57, 44, 85][index]}%`,
    '--hue': [0, 50, 100, 150, 200, 250][index],
    '--scale': `${[2, 2, 3, 6, 2, 2][index]}`,
    '--duration': `-${[3.48, 2.8, 3.12, 2.72, 3.15, 3.23][index]}s`,
    '--start': `${[1, 4, 1, 3, 4, 3][index]}s`,
  } as any;
}

export default function Slide1() {
  return (
    <main
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100lvh',
        paddingBottom: '50px',
      })}
    >
      <h1
        className={css(({ theme }) => ({
          fontFamily: theme.typography.fontFamilyTagline,
          fontSize: '5rem',
          fontWeight: 500,
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          color: '#888',
          marginBottom: '1rem',
          ...theme.applyStyles('dark', { color: '#fff' }),
        }))}
      >
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
        CSS-in-JS in the server component age
      </div>
    </main>
  );
}
