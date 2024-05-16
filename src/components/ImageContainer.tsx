import { css } from '@pigment-css/react';

export default function ImageContainer({
  width = '100%',
  children,
}: {
  width?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={css({
        margin: 'auto',
        marginTop: '1rem',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid',
        borderColor: 'hsla(220, 100%, 95%, 0.15)',
        borderRadius: '.65rem',
        backgroundColor: 'hsla(220, 100%, 95%, 0.05)',
        boxShadow: '0 8px 20px #000',
      })}
      style={{
        width,
      }}
    >
      {children}
    </span>
  );
}
