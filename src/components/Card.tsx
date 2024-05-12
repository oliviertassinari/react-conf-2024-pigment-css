import { css } from '@pigment-css/react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={css({
        padding: '2rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        backgroundColor: 'hsla(220, 100%, 85%, 0.05)',
        border: '1px solid',
        borderColor: 'hsla(220, 100%, 95%, 0.15)',
        borderRadius: '.65rem',
        boxShadow: '0 12px 40px hsl(0 0% 0%)',
        '& > div': {
          margin: 0,
          padding: 0,
        },
      })}
    >
      {children}
    </span>
  );
}
