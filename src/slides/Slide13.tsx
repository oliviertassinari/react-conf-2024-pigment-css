import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import TitleAndSubtitle from '../components/TitleAndSubtitle';
import { Image } from 'spectacle';

export default function Slide13() {
  return (
    <SlideContainer leftAligned noBgColor>
      <TitleAndSubtitle title="RSC support" subtitle="Emotion & styled-components" />
      <span
        className={css({
          position: 'relative',
          // margin: 'auto',
          // marginTop: '1rem',
          width: '100%',
          '& > img': {
            border: '1px solid',
            borderColor: 'hsla(220, 100%, 95%, 0.15)',
            borderRadius: '.65rem',
          },
        })}
      >
        <Image
          src="/images/rsc-emotion.png"
          width="50%"
          className={css({
            position: 'absolute',
            borderRadius: 4,
            top: 0,
            transform: 'rotate(-1deg)',
            boxShadow: '0 8px 20px #000',
          })}
        />
        <Image
          src="/images/rsc-sc.png"
          width="50%"
          className={css({
            position: 'absolute',
            borderRadius: 4,
            top: 0,
            left: '50%',
            transform: 'rotate(4deg)',
            boxShadow: '0 8px 20px #000',
          })}
        />
      </span>
    </SlideContainer>
  );
}
