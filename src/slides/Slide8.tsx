import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import TitleAndSubtitle from '../components/TitleAndSubtitle';
import { Image } from 'spectacle';

export default function Slide8() {
  return (
    <SlideContainer leftAligned noBgColor>
      <TitleAndSubtitle title="16kB of gzipped bundle size" subtitle="Performance" />
      <span
        className={css({
          margin: 'auto',
          marginTop: '1rem',
          padding: '1rem 0',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid',
          borderColor: 'hsla(220, 100%, 95%, 0.15)',
          borderRadius: '.65rem',
          backgroundColor: 'hsla(220, 100%, 95%, 0.05)',
          boxShadow: '0 8px 20px #000',
        })}
      >
        <Image src="/images/bundle-size.png" width="70%" className={css({ margin: 0 })} />
      </span>
    </SlideContainer>
  );
}
