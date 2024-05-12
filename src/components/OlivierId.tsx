import { css } from '@pigment-css/react';

export default function OlivierId({
  bigger,
  notAbsolute,
}: {
  bigger?: boolean;
  notAbsolute?: boolean;
}) {
  return (
    <div
      className={css(({ theme }) => ({
        bottom: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.typography.fontFamily,
        '> img': {
          borderRadius: 999,
          border: '4px solid',
          borderColor: 'hsla(210 100% 50% / 0.2)',
          boxShadow: '0 0 0 1px hsla(210 50% 30%)',
        },
      }))}
      style={{
        position: notAbsolute ? 'static' : 'absolute',
        gap: bigger ? '1rem' : '0.875rem',
      }}
    >
      <img src="/images/olivier.jpeg" width={bigger ? 55 : 40} height={bigger ? 55 : 40} />
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.2rem',
        })}
      >
        <p
          className={css({ margin: 0, fontWeight: 500 })}
          style={{ fontSize: bigger ? '1.5rem' : '1.3rem' }}
        >
          Olivier Tassinari
        </p>
        <p className={css({ margin: 0, opacity: 0.5, fontSize: '1.2rem' })}>
          Co-creator of Material UI and CEO @MUI
        </p>
      </div>
    </div>
  );
}
