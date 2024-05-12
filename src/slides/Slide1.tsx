import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import OlivierId from '../components/OlivierId';
import { Pigment } from '../components/Pigment';

export default function Slide1() {
  return (
    <SlideContainer>
      <Pigment />
      <div
        className={css(({ theme }) => ({
          fontFamily: theme.typography.fontFamily,
          opacity: 0.8,
          textAlign: 'center',
          textWrap: 'balance',
          fontSize: '1.4rem',
          paddingBottom: '50px',
        }))}
      >
        CSS-in-JS in the server components age
      </div>
      <OlivierId />
    </SlideContainer>
  );
}
