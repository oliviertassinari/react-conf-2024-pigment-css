import React from 'react';
import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import StateOfCSSTitle from '../components/StateOfCSSTitle';
import ChartSubtitle from '../components/ChartSubtitle';
import { Image } from 'spectacle';

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
        <StateOfCSSTitle
          subtitles={
            <React.Fragment>
              <ChartSubtitle color="#4861EC" label="styled-components" />
              <ChartSubtitle color="#FE6A6A" label="Emotion" />
              <ChartSubtitle color="#4BC77E" label="CSS Modules" />
            </React.Fragment>
          }
        />
        <Image
          src="/images/styled-components-no-sub.png"
          width="80%"
          className={css({ transform: 'translate(7%)' })}
        />
      </div>
    </SlideContainer>
  );
}
