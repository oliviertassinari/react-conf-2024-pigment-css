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

function getHue() {
  index += 1;
  return [0, 50, 100, 150, 200, 250][index];
}

function generateBubbleVars() {
  return `
    --x: ${randomBetween(0, 100)}%;
    --y: ${randomBetween(15, 85)}%;
    --hue: ${getHue()};
    --scale: ${randomBetween(2, 6)};
    --duration: -${randomBetween(250, 400) / 1000}s;
    --start: ${randomBetween(3, 6)}s;
  `;
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
        padding: '20px',
        color: 'hsl(var(--palette-foreground))',
        backgroundColor: 'hsl(var(--palette-background))',
        fontFamily:
          "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      })}
    >
      <h1
        className={`my-custom-class ${css(({ theme }) => ({
          fontFamily: 'system-ui, sans-serif',
          fontSize: '5rem',
          fontWeight: 500,
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          color: '#888',
          marginBottom: '1rem',
          ...theme.applyStyles('dark', { color: '#fff' }),
        }))}`}
      >
        Pigment CSS
        <span
          className={css(({ theme }) => ({
            position: 'absolute',
            inset: '0',
            background: 'white',
            mixBlendMode: 'color-burn',
            overflow: 'hidden',
            pointerEvents: 'none',
            ...theme.applyStyles('dark', {
              mixBlendMode: 'darken',
              filter: 'brightness(1)',
            }),
          }))}
        >
          <Bubble
            className={css`
              ${generateBubbleVars()}
            `}
          />
          <Bubble
            className={css`
              ${generateBubbleVars()}
            `}
          />
          <Bubble
            className={css`
              ${generateBubbleVars()}
            `}
          />
          <Bubble
            className={css`
              ${generateBubbleVars()}
            `}
          />
          <Bubble
            className={css`
              ${generateBubbleVars()}
            `}
          />
          <Bubble
            className={css`
              ${generateBubbleVars()}
            `}
          />
        </span>
      </h1>
      <div
        className={css({
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '2px',
          opacity: 0.6,
          lineHeight: 2,
          textAlign: 'center',
          textWrap: 'balance',
        })}
      >
        CSS in the server component age
      </div>
    </main>
  );
}
