import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import { Heading, Text } from 'spectacle';

export default function Slide10() {
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
          Data Grid
        </Heading>
        <span
          className={css({
            marginTop: 30,
            width: '70%',
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
              width: '70%',
              borderRadius: '0.3rem',
            })}
          >
            <source src="/images/data-grid.mp4" type="video/mp4" />
          </video>
        </span>
      </div>
    </SlideContainer>
  );
}
