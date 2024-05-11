import { css } from '@pigment-css/react';
import Slide1 from './Slide1';
import { Template } from './Template';
import { Backdrop } from './Backdrop';
import { Heading, SlideLayout, Slide, Deck, Text, Image, Notes } from 'spectacle';
import { rawTheme } from '../rawTheme';

const spectacleTheme = {
  colors: {
    primary: '#fff',
    secondary: 'hsl(210, 100%, 65%)',
    tertiary: 'transparent',
    quaternary: 'red',
    quinary: 'red',
  },
  fontSizes: {
    h1: '62px',
    h2: '64px',
    h3: '56px',
    text: '44px',
    monospace: '20px',
  },
  Backdrop,
  fonts: {
    header: rawTheme.typography.fontFamilyTagline,
    text: rawTheme.typography.fontFamily,
  },
};

const transition = {
  from: {
    opacity: 0,
  },
  enter: {
    filter: 'blur(0px)',
    opacity: 1,
  },
  leave: {
    // Make people loose focus
    filter: 'blur(2px)',
    opacity: 0,
  },
};

export default function Presentation() {
  return (
    <Deck theme={spectacleTheme} transition={transition} template={<Template />}>
      <Slide>
        <Slide1 />
        <Notes>
          {/* 50s */}
          <ul>
            <li>Hi everyone! I'm so excited to be here.</li>
            <li>
              I'm Olivier and I'm going to talk about your favorite topic, or maybe not: CSS-in-JS.
            </li>
            <li>
              By the end of this presentation, I would like you to better understand how React
              Server Components are shaking this space, the challenges with today's generation of
              libraries, and the key properties I think you should look out for a great styling
              solutions.
            </li>
            <li>
              Now, React
              Server Components might shake the space, but there is hope. I'm also going to introduce Pigment CSS, which is part of
              a next generation movement for CSS-in-JS libraries.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          A quick poll
        </Text>
        <Heading fontWeight="500" color="primary">
          Who has styled-components<br/>
          or Emotion in their projet today?
        </Heading>
        <Notes>
          {/* 25s */}
          <ul>
            <li>Let's start with two quick pools</li>
            <li>Please raise your hand</li>
            <li>Who has styled-components or Emotion in their projet today?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        {/* Source https://2023.stateofcss.com/en-US/css-in-js/ */}
        <Text fontSize="2rem" color="secondary" className={css({ display: 'flex' })}>
          State of CSS
          <Image src="/images/stateofcss.svg" width="40" className={css({ marginLeft: 4 })} />
        </Text>
        <Image src="/images/styled-components.png" width="100%" />
        <Notes>
          <ul>
            <li>You are not alone, a lot of people do</li>
            <li>
              Accoding to the stateofcss survey, over 50% of the frontend community uses one of
              these to
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Who feels great about it?
        </Heading>
        <Notes>
          <ul>
            <li>An now, let's get more spicy 🌶️, please raise your hand again</li>
            <li>How feels great about it?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
        </Notes>
      </Slide>
    </Deck>
  );
}
