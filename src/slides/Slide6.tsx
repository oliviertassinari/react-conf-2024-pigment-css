import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import OlivierId from '../components/OlivierId';
import { Image } from 'spectacle';

export default function Slide6() {
  return (
    <SlideContainer noBgColor>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4rem',
        })}
      >
        <Image src="/images/MUI.svg" width="400" />
        <OlivierId bigger notAbsolute />
      </div>
    </SlideContainer>
  );
}
