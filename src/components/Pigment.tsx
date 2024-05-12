import { styled, css, keyframes } from '@pigment-css/react';
import styled2 from '@emotion/styled';
import styled3 from 'styled-components';
import PigmentLogo from '../components/PigmentLogo';

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
  animation: `${scale} var(--duration, 4s) var(--delay, 0s) infinite alternate`,
});

const Bubble2 = styled2('span')({
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
  animation: `${scale} var(--duration, 4s) var(--delay, 0s) infinite alternate`,
});

const Bubble3 = styled3('span')({
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
  animation: `${scale} var(--duration, 4s) var(--delay, 0s) infinite alternate`,
});

const Bubble4 = () => <span />;

// function randomBetween(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function generateBubbleVars() {
//   index += 1;
//   return {
//     '--x': `${randomBetween(0, 100)}%`,
//     '--y': `${randomBetween(15, 85)}%`,
//     '--hue': `${randomBetween(0, 360)}`,
//     '--scale': `${randomBetween(2, 6)}`,
//     '--delay': `-${randomBetween(250, 400) / 100}s`,
//     '--duration': `${randomBetween(1, 5)}s`,
//   } as any;
// }

// A set of values I love
function generateBubbleVars(index: number) {
  return {
    '--x': `${[10, 5, 10, 100, 23, 50][index]}%`,
    '--y': `${[34, 50, 37, 50, 44, 45][index]}%`,
    '--hue': [200, 180, 210, 240, 220, 225][index],
    '--scale': `${[1, 3, 2, 6, 2, 2][index]}`,
    '--delay': `-${[100, 10, 3.12, 2.72, 3.15, 3.23][index]}s`,
    '--duration': `${[8, 4, 1.5, 3, 4, 3][index]}s`,
  } as any;
}

export function Pigment() {
  return (
    <h1
      className={css(({ theme }) => ({
        all: 'unset',
        position: 'relative',
        display: 'flex',
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
      <img src="/images/pigment.svg" />
      <span className={css({ position: 'relative', backgroundClip: 'text' })}>
        Pigment CSS
        <span
          className={css(({ theme }) => ({
            position: 'absolute',
            inset: '0',
            backgroundColor: '#fff',
            mixBlendMode: 'color-burn',
            overflow: 'hidden',
            pointerEvents: 'none',
            backgroundClip: 'text',
            ...theme.applyStyles('dark', {
              mixBlendMode: 'darken',
              filter: 'brightness(1)',
            }),
          }))}
        >
          <Bubble className={css(generateBubbleVars(0))} />
          <Bubble className={css(generateBubbleVars(1))} />
          <Bubble className={css(generateBubbleVars(2))} />
          <Bubble className={css(generateBubbleVars(3))} />
          <Bubble2 className={css(generateBubbleVars(4))} />
          <Bubble3 className={css(generateBubbleVars(5))} />
          <Bubble4 />
        </span>
      </span>
    </h1>
  );
}
