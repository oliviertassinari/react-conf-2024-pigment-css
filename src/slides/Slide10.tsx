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
          // width: '70%',
          flexGrow: 0,
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
        <video
          autoPlay
          muted
          loop
          playsInline
          className={css({
            width: '60%',
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
