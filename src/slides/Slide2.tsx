import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import { Heading, Text } from 'spectacle';

export default function Slide2() {
  return (
    <SlideContainer noBgColor>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          '& > div': {
            margin: 0,
            padding: 0,
          },
        })}
      >
        <Text fontSize="1.5rem" color="secondary" fontWeight="500">
          Getting started
        </Text>
        <Heading fontWeight="500" color="primary">
          Who here is currently using
          <br />
          styled-components or Emotion today?
        </Heading>
      </div>
    </SlideContainer>
  );
}