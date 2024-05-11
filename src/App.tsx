import { css } from '@pigment-css/react';
import Slide1 from './Slide1';
import { Template } from './Template';
import { Backdrop } from './Backdrop';
import {
  Heading,
  SlideLayout,
  UnorderedList,
  ListItem,
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
              Now, React Server Components might shake the space, but there is hope. I'm also going
              to introduce Pigment CSS, which is part of a next generation movement for CSS-in-JS
              libraries.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          A quick poll
        </Text>
        <Heading fontWeight="500" color="primary">
          Who has styled-components
          <br />
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
          <Image src="/images/stateofcss.svg" width="40" className={css({ marginLeft: 6 })} />
        </Text>
        <Image
          src="/images/styled-components.png"
          width="80%"
          className={css({ marginTop: 16, transform: 'translate(20%)' })}
        />
        <Notes>
          {/* 15s */}
          <ul>
            <li>You are not alone, a lot of people do.</li>
            <li>
              According to the State of CSS survey, over 60% of the frontend community uses one of
              these two.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          🌶️
        </Text>
        <Heading fontWeight="500" color="primary">
          How feel left behind with them,
          <br />
          considering migrating away?
        </Heading>
        <Notes>
          <ul>
            <li>And the last poll, a spicy one 🌶️, please raise your hand again</li>
            <li>How feel left behind with them, considering migrating away?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        {/* Source https://2023.stateofcss.com/en-US/css-in-js/ */}
        <Text fontSize="2rem" color="secondary" className={css({ display: 'flex' })}>
          State of CSS
          <Image src="/images/stateofcss.svg" width="40" className={css({ marginLeft: 6 })} />
        </Text>
        <Image
          src="/images/mood.png"
          width="90%"
          className={css({ margin: 'auto', marginBottom: 200 })}
        />
        <Notes>
          {/* 15s */}
          <ul>
            <li>I see a good number of hand raised here! x% of the audience</li>
            <li>
              In the same State of CSS survey, you can see a clear decline of interest for Styled
              components and Emotion
            </li>
            <li>What's going on?</li>
          </ul>
        </Notes>
      </Slide>
      <SlideLayout.Center>
        {/* TODO: I took this from https://www.notion.so/mui-org/Logo-source-127ec595223047b19faaf9b4c4094ba8, but it's weird
         It looks different */}
        <Image
          src="/images/MUI.svg"
          width="400"
          className={css({ margin: '0px auto 80px', })}
        />
        <div
          className={css(({ theme }) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.2rem',
            fontFamily: theme.typography.fontFamily,
            fontSize: '1.5rem',
            '> img': {
              borderRadius: 999,
              border: '4px solid',
              borderColor: 'hsla(210 100% 50% / 0.3)',
            },
          }))}
        >
          <img src="/images/olivier.jpeg" width="70" height="70" />
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
            })}
          >
            <p className={css({ margin: 0, fontWeight: 500 })}>Olivier Tassinari</p>
            <p className={css({ margin: 0, opacity: 0.5 })}>Co-creator of Material UI and CEO @MUI</p>
          </div>
        </div>
        <Notes>
          {/* 15s */}
          <ul>
            <li>I won't provide a definitive answer, but at MUI, we are facing the same challenges.</li>
            <li>
              co-creator of Material UI and CEO of MUI.
            </li>
          </ul>
        </Notes>
      </SlideLayout.Center>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          MUI
        </Text>
        <Heading fontWeight="500" color="primary">
          We funds the development of:
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text lineHeight={0.7}>Material UI</Text>
          </ListItem>
          <ListItem>
            <Text lineHeight={0.7}>MUI X</Text>
          </ListItem>
          <ListItem>
            <Text lineHeight={0.7}>Base UI</Text>
          </ListItem>
          <ListItem>
            <Text lineHeight={0.7}>Toolpad</Text>
          </ListItem>
        </UnorderedList>
        <Notes>
          {/* 15s */}
          <ul>
            <li>
              At MUI, we are facing the same challenges.
              co-creator of Material UI and CEO of MUI.
            </li>
            <li>
              For those of you that don't know us. MUI is the organization that funds the
              development of multiple open-source projects in the React space: - Material UI, a
              popular UI library that implements the Material Design principles. - MUI X, a set of
              advanced React components like data grids and charts. - Base UI, Headless UI
              components - Toolpad, a set of components to quickly build internal tools.
            </li>
            <li>For all of these projects, we rely on Emotion, one way or another.</li>
            <li>And we are facing two main challenges</li>
          </ul>
        </Notes>
      </Slide>
    </Deck>
  );
}
