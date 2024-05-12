import React from 'react';
import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import ChartSubtitle from '../components/ChartSubtitle';
import StateOfCSSTitle from '../components/StateOfCSSTitle';
import { Image } from 'spectacle';

export default function Slide5() {
  return (
    <SlideContainer noBgColor>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          '& * div': {
            margin: 0,
            padding: 0,
          },
        })}
      >
        <StateOfCSSTitle
          subtitles={
            <React.Fragment>
              <ChartSubtitle color="#09657D" label="Would use again" />
              <ChartSubtitle color="#FE6A6A" label="Would not use" />
              <ChartSubtitle color="#39D6FF" label="Interested" />
              <ChartSubtitle color="#FFA3A3" label="Not interested" />
              <ChartSubtitle color="#BBB2B6" label="Never heard" />
            </React.Fragment>
          }
        />
        <Image
          src="/images/mood-no-sub.png"
          width="80%"
          className={css({ margin: 'auto', marginTop: 60, marginBottom: 120 })}
        />
      </div>
    </SlideContainer>
  );
}
