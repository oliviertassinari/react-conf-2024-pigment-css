import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import { Heading, Text } from 'spectacle';

export default function Slide4() {
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
        <Text fontSize="1.5rem" color="textRed" fontWeight="500">
          🌶️&nbsp;&nbsp;&nbsp;Spicy &nbsp;&nbsp;🌶️
        </Text>
        <Heading fontWeight="500" color="primary">
          Who feels left behind by them and <br />
          is considering migrating away?
        </Heading>
      </div>
    </SlideContainer>
  );
}
