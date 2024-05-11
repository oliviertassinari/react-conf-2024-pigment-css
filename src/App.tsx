import { css } from '@pigment-css/react';
import Slide1 from './Slide1';
import { Template } from './Template';
import { Backdrop } from './Backdrop';
import {
  Heading,
  Slide,
  Deck,
  Text,
  Image,
  Notes,
} from 'spectacle';
import { rawTheme } from '../rawTheme';

const spectacleTheme = {
  colors: {
    primary: '#fff',
    secondary: 'hsl(210, 100%, 60%)',
    tertiary: '#000',
    quaternary: 'red',
    quinary: 'red',
  },
  fontSizes: {
    h1: '72px',
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
    opacity: 1,
  },
  leave: {
    opacity: 0,
  },
};

export default function Presentation() {
  return (
    <Deck theme={spectacleTheme} transition={transition} template={<Template />}>
      <Slide>
        <Slide1 />
        <Notes>
          <ul>
            <li>Hello everyone! I'm so excited to be here.</li>
            <li>
              I'm Olivier and I'm going to talk about your favorite topic, or maybe not: CSS-in-JS.
            </li>
            <li>
              By the end of this presentation, I would like you to better understand how React
              Server Components are shaking the CSS-in-JS space.
            </li>
            <li>
              But fear not, there is hope, I'm also going to introduce Pigment CSS, the solution
              that the team working on Material UI created.
            </li>
            <li>Let's get into it!</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          A quick poll
        </Text>
        <Heading fontWeight="500" color="primary">
          Who here is currently using
          <br /> styled-components or Emotion?
        </Heading>
        <Notes>
          <ul>
            <li>Let's start with two quick pools</li>
            <li>Please raise your hand</li>
            <li>Who is using styled-components or Emotion today?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        {/* Source https://2023.stateofcss.com/en-US/css-in-js/ */}
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
