import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import { Template } from './Template';
import { Backdrop } from './Backdrop';
import { Slide, Deck, Notes } from 'spectacle';
import { rawTheme } from '../rawTheme';

const spectacleTheme = {
  colors: {
    brandBlue: 'hsl(210, 100%, 65%)',
    textPrimary: '#FFF',
    textSecondary: 'hsl(210, 20%, 75%)',
    textRed: 'hsl(0, 99%, 70%)',
    tertiary: 'transparent',
  },
  fontSizes: {
    h1: '54px',
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
              Now, React Server Components might shake the space, but there is hope. I'm also going
              to introduce Pigment CSS, which is part of a next generation movement for CSS-in-JS
              libraries.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Slide2 />
        <Notes>
          {/* 25s */}
          <ul>
            <li>Let's start with two quick question</li>
            <li>Please raise your hands</li>
            <li>Who here is currently using styled-components or Emotion today?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Slide3 />
        <Notes>
          {/* 15s */}
          <ul>
            <li>This seems reprensative.</li>
            <li>
              According to the last State of CSS survey, over 60% of the frontend community uses one
              of these two.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Slide4 />
        <Notes>
          <ul>
            <li>And the last question, a spicy one 🌶️, please raise your hand again</li>
            <li>Who feels left behind by them and is considering migrating away?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Slide5 />
        <Notes>
          {/* 15s */}
          <ul>
            <li>
              And again, from the same State of CSS survey, you can see a clear decline of interest
              in styled-components and Emotion
            </li>
            <li>What's going on?</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Slide6 />
        <Notes>
          {/* 15s */}
          <ul>
            <li>
              I can't provide a definitive answer, but at MUI, we are facing the same challenges.
            </li>
            <li>
              For those that don't know me, I co-created Material UI a long time ago. I'm now
              running MUI as its CEO.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Slide7 />
        <Notes>
          {/* 15s */}
          <ul>
            <li>
              At MUI, we fund the development of a few open-source projects:
              <br />
              - Material UI, a popular UI library that implements Google's Material Design
              <br />
              - Base UI, a headless, "unstyled" UI component library
              <br />
              - MUI X, a set of advanced React components, like Data Grids, Charts, and so on
              <br />
              - Toolpad, a set of components to quickly build internal tools
              <br />
            </li>
            <li>
              The common denominator between them is that all these projects rely on Emotion in one
              way or another.
            </li>
            <li>And we are facing two main challenges:</li>
          </ul>
        </Notes>
        {/* 3:00 minutes */}
      </Slide>
    </Deck>
  );
}
