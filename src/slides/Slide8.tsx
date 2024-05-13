import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import { Heading, Text, Image } from 'spectacle';

export default function Slide8() {
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
          11 + 4 = 16kB of gzipped bundle size
        </Heading>
        <span
          className={css({
            marginTop: 50,
            width: '70%',
            padding: '1rem 0',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid',
            borderColor: 'hsla(220, 100%, 95%, 0.15)',
            borderRadius: '.65rem',
          })}
        >
          <Image src="/images/bundle-size.png" width="70%" className={css({ margin: 0 })} />
        </span>
      </div>
    </SlideContainer>
  );
}
