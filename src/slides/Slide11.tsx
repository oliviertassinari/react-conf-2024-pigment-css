import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import TitleAndSubtitle from '../components/TitleAndSubtitle';
import { Image } from 'spectacle';

export default function Slide11() {
  return (
    <SlideContainer leftAligned noBgColor>
      <TitleAndSubtitle title="Data Grid" subtitle="Performance" />
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
      >
        <Image src="/images/data-grid.png" width="40%" />
      </span>
    </SlideContainer>
  );
}
