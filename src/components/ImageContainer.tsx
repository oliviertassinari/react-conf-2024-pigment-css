import { css } from '@pigment-css/react';

export default function ImageContainer({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={css({
        margin: 'auto',
        marginTop: '1rem',
        width: '100%',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid',
        borderColor: 'hsla(220, 100%, 95%, 0.15)',
        borderRadius: '.65rem',
        backgroundColor: 'hsla(220, 100%, 95%, 0.05)',
        boxShadow: '0 8px 20px #000',
      })}
    >
      {children}
    </span>
  );
}
