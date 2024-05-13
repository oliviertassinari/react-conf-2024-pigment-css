import { css } from '@pigment-css/react';
import { Text, Image } from 'spectacle';

export default function StateOfCSSTitle({ subtitles }: { subtitles: React.ReactNode }) {
  return (
    <div
      className={css({
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <section
        className={css({
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.65rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid hsl(0 0% 10%)',
        })}
      >
        {/* Source https://2023.stateofcss.com/en-US/css-in-js/ */}
        <Image src="/images/stateofcss.svg" width="36" />
        <Text fontSize="1.5rem" color="primary" fontWeight="500">
          State of CSS
        </Text>
      </section>
      <section
        className={css({
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          border: '1px solid hsl(0 0% 10%)',
          borderTop: 0,
          borderRadius: '0 0 8px 8px',
          backgroundColor: 'hsl(210 60% 5%)',
        })}
      >
        {subtitles}
      </section>
    </div>
  );
}
