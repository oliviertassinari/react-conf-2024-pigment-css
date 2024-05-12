import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import { Text, Image } from 'spectacle';

export default function Slide3() {
  return (
    <SlideContainer noBgColor>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          '& * div': {
            margin: 0,
            padding: 0,
          },
        })}
      >
        <div
          className={css({
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px dashed hsl(0 0% 15%)',
          })}
        >
          {/* Source https://2023.stateofcss.com/en-US/css-in-js/ */}
          <Image src="/images/stateofcss.svg" width="40" />
          <Text fontSize="1.5rem" color="primary" fontWeight="500">
            State of CSS 2023
          </Text>
        </div>
        <Image
          src="/images/styled-components.png"
          width="80%"
          className={css({ transform: 'translate(10%)' })}
        />
      </div>
    </SlideContainer>
  );
}
