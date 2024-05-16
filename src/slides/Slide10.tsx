import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import TitleAndSubtitle from '../components/TitleAndSubtitle';

export default function Slide10() {
  return (
    <SlideContainer leftAligned noBgColor>
      <TitleAndSubtitle title="Data Grid" subtitle="Performance" />
      <span
        className={css({
          margin: 'auto',
          width: '60%',
          flexGrow: 0,
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className={css({
            width: '100%',
            borderRadius: '.65rem',
            overflow: 'clip',
          })}
        >
          <source src="/images/data-grid.mp4" type="video/mp4" />
        </video>
      </span>
    </SlideContainer>
  );
}
