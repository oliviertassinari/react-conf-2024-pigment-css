import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import { Heading, Text, Image } from 'spectacle';

export default function Slide9() {
  return (
    <SlideContainer noBgColor>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          '& > div': {
            margin: 0,
            padding: 0,
          },
        })}
      >
        <Text fontSize="1.5rem" color="brandBlue" fontWeight="500">
          Performance
        </Text>
        <Heading fontWeight="500" color="primary">
          Runtime impact
        </Heading>
        <span
          className={css({
            marginTop: 50,
            width: '70%',
            overflow: 'clip',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid',
            borderColor: 'hsla(220, 100%, 95%, 0.15)',
            borderRadius: '.65rem',
            backgroundColor: 'hsla(220, 100%, 95%, 0.2)',
          })}
        >
          <Image
            src="/images/benchmark-before.png"
            width="100%"
            className={css({ margin: 0, borderRadius: '0.3rem' })}
          />
        </span>
      </div>
    </SlideContainer>
  );
}
