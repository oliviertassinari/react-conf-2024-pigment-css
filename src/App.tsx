import * as React from 'react';
import { styled, css } from '@pigment-css/react';
import { Template } from './Template';
import { Backdrop } from './Backdrop';
import { Pigment } from './components/Pigment';
import SlideContainer from './components/SlideContainer';
import {
  Slide,
  SlideLayout,
  Heading,
  Text,
  Deck,
  Image,
  Appear,
  Notes,
  UnorderedList,
  ListItem,
  DeckContext,
  useMousetrap,
} from 'spectacle';
import { rawTheme } from '../rawTheme';

// Slides
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const spectacleTheme = {
  colors: {
    primary: '#fff',
    secondary: 'hsl(210, 100%, 65%)',
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

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Support presentation dongles
function KeyboardShortcut() {
  const deckContext = React.useContext(DeckContext);

  useMousetrap(
    {
      pageup: deckContext.stepBackward,
      pagedown: deckContext.stepForward,
      f: toggleFullScreen,
    },
    [],
  );

  return null;
}

export default function Presentation() {
  return (
    <Deck theme={spectacleTheme} transition={transition} template={<Template />}>
      <KeyboardShortcut />
      <Slide>
        <Slide1 />
        <Notes>
          <ul>
            <li>Hi everyone! I'm so excited to be here.</li>
            <li>
              I'm Olivier and I'm going to talk about your favorite topic, or maybe not: CSS-in-JS.
            </li>
            <li>
              By the end of this presentation, I would like you to better understand how React
              Server Components are shaking this space, the challenges with today's generation of
              libraries, and the key properties I think we should look out for a great styling
              solutions.
            </li>
            <li>
              Now, React Server Components might shake the space, but there is hope. I'm also going
              to introduce Pigment CSS, which is part of a next generation of CSS-in-JS libraries
              movement.
            </li>
          </ul>
          40s
        </Notes>
      </Slide>
      <Slide>
        <Slide2 />
        <Notes>
          <ul>
            <li>Let's start with two quick questions</li>
            <li>Please raise your hands</li>
            <li>Who here is currently depending on styled-components or Emotion?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
          1m00s
        </Notes>
      </Slide>
      <Slide>
        <Slide3 />
        <Notes>
          <ul>
            <li>You folks seems to be a good sample of the ecosystem.</li>
            <li>
              According to the last State of CSS survey, over 60% of the frontend community uses one
              of these two.
            </li>
          </ul>
          1m10s
        </Notes>
      </Slide>
      <Slide>
        <Slide4 />
        <Notes>
          <ul>
            <li>Last question, a spicy one 🌶️, please raise your hand again</li>
            <li>Who feels left behind by these libraries and is considering migrating away?</li>
            <li>🙆‍♂️</li>
            <li>Or so fewer hands than before, but still a good number, about x%</li>
          </ul>
          1m30s
        </Notes>
      </Slide>
      <Slide>
        <Slide5 />
        <Notes>
          <ul>
            <li>And again, it's consistent with the same survey.</li>
            <li>
              In the State of CSS you can see a clear decline of interest in styled-components and
              Emotion since a year or two ago.
            </li>
          </ul>
          1m45s
        </Notes>
      </Slide>
      <SlideLayout.Center>
        <Heading fontWeight="500" color="primary">
          The challenges
        </Heading>
        <Notes>
          <ul>
            <li>What's going on?</li>
          </ul>
          1m50s
        </Notes>
      </SlideLayout.Center>
      <Slide>
        <Slide6 />
        <Notes>
          <ul>
            <li>
              I can't provide a definitive answer, but at MUI, we are facing the same challenges.
            </li>
            <li>
              For those that don't know me, I co-created Material UI a long time ago. I'm now
              running MUI as its CEO.
            </li>
          </ul>
          2m05s
        </Notes>
      </Slide>
      <Slide>
        <Slide7 />
        <Notes>
          <ul>
            <li>
              At MUI, we fund the development of a few open-source projects, we have:
              <br />
              - Base UI, a headless UI component library, meaning unstyled
              <br />
              - Material UI, a popular UI library that implements Material Design principles
              <br />
              - MUI X, a set of advanced React components, including Data Grids, Charts, and so on
              <br />
              - Toolpad, a set of components to quickly build internal tools
              <br />
            </li>
            <li>
              The common denominator between them is that all these projects rely on Emotion in one
              way or another, which gave us a good exposure to the problems.
            </li>
          </ul>
          2m45s
        </Notes>
      </Slide>
      <Slide>
        <Slide8 />
        <Notes>
          {/* https://bundlephobia.com/package/styled-components@6.1.11 */}
          <ul>
            <li>The first problem we faced was with performance.</li>
            <li>
              The bundle size of the application takes a hit, styled-components adds about 11kB
              gzipped because it has a runtime.
            </li>
            <li>
              And you also need to add about 4kB because it works with a rich JavaScript theme and some helpers, like around colors.
            </li>
            <li>So in total, you look at 16 kB.</li>
            <li>
              Now, to be fair, it's not the end of the world, if you compare it to the bundle size of
              React itself, it's about 1/3 (45KB).
            </li>
            <li>Still, is it really needed?</li>
          </ul>
          3m20s
        </Notes>
      </Slide>
      <Slide>
        <Slide9 />
        <Notes>
          <ul>
            <li>The runtime takes the largest performance hit</li>
            <li>Here, you can see how much time it takes to render a table with 1,000 rows.</li>
            <li>It's not great, you can't use Emotion without virtualization.</li>
          </ul>
          3m35s
        </Notes>
      </Slide>
      <Slide>
        <Slide10 />
        <Notes>
          {/* https://mui.com/x/react-data-grid/#pro-plan https://github.com/mui/mui-x/issues/11866#issuecomment-1963168133 */}
          <ul>
            <li>But sure, let's say you add virtualization.</li>
            <li>This is our data grid, rendering 100,000 rows with CPU throttling.</li>
            <li>Do you see the blank areas?</li>
          </ul>
          3m50s
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          Performance
        </Text>
        <Image src="/images/data-grid.png" width="40%" className={css({ margin: '50px auto' })} />
        <Notes>
          <ul>
            <li>
              If you look at the performance timeline, you will find that it spent about 14% of the time
              generating over and over the same Emotion styles for the rows.
            </li>
            <li>So in theory, we could have 14% fewer blank areas.</li>
            <li>For analyzing data use cases, I think it matters.</li>
          </ul>
          4m10s
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          Performance
        </Text>
        <Image
          src="/images/user-feedback-1.png"
          width="55%"
          className={css({ margin: '100px auto 20px' })}
        />
        {/*<Image src="/images/user-feedback-2.png" width="55%" className={css({ margin: '5px auto' })} />*/}
        <Notes>
          {/* https://www.reddit.com/r/reactjs/comments/1bzsxa6/take_a_survey_which_ui_component_library_does/?rdt=61541 */}
          <ul>
            <li>And if this wasn't enough, we also hear it from you</li>
            <li>Here is a person loving to use Material UI but experiencing frustration with the speed of the sx prop.</li>
          </ul>
          4m20s
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          RSC support
        </Text>
        <Image
          src="/images/rsc-emotion.png"
          width="50%"
          className={css({
            position: 'absolute',
            borderRadius: 4,
            top: 150,
            transform: 'rotate(-1deg)',
          })}
        />
        <Image
          src="/images/rsc-sc.png"
          width="50%"
          className={css({
            position: 'absolute',
            borderRadius: 4,
            top: 150,
            left: '50%',
            transform: 'rotate(4deg)',
          })}
        />
        <Notes>
          {/*
https://github.com/emotion-js/emotion/issues/2978
https://github.com/styled-components/styled-components/issues/4025
          */}
          <ul>
            <li>That was performance</li>
            <li>
              The second key problem, that is more recent, is with the support of React Server
              Components
            </li>
            <li>
              Nor styled components or Emotion are compatible with it, and we see no real progress.
            </li>
            <li>The blocking point is the React context API that is not available with RSC, so far.</li>
            <li>Now, we might be able to use the React cache API to workaround this, but again we don't see much work happening there.</li>
          </ul>
          4m40s
        </Notes>
      </Slide>
      <SlideLayout.Center>
        <Heading fontWeight="500" color="primary">
          The options
        </Heading>
        <Notes>
          <ul>
            <li>These problems are too important for MUI not to try to solve.</li>
            <li>Over a year ago, we started to focus on this. I hope you will too.</li>
            <li>Let's look at how we approached this.</li>
          </ul>
          5m00s
        </Notes>
      </SlideLayout.Center>
      <Slide>
        <UnorderedList>
          <ListItem>CSS Modules</ListItem>
          <ListItem>Inline style</ListItem>
          <ListItem>StyleX</ListItem>
          <ListItem>Tailwind CSS</ListItem>
          <ListItem>Linaria</ListItem>
          <ListItem>Panda CSS</ListItem>
          <ListItem>Tokanami</ListItem>
          <ListItem>…</ListItem>
        </UnorderedList>
        <Notes>
          <ul>
            <li>There are a lot of of options.</li>
            <li>CSS Modules, Inline style, StyleX, Tailwind CSS, Linaria, and so on.</li>
            <li>It's overwhelming to compare them all.</li>
            <li>So let's look at some of the key properties I think we should have</li>
            <li>
              Before disclaimer, I'm looking at those in the context of Material UI, these solution adopt
              different tradeoffs, I'm sure they all have context where they are best.
            </li>
          </ul>
          5m25s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Style colocation
        </Heading>
        <Image
          src="/images/style-collocation.png"
          width="50%"
          className={css({ margin: '0px auto' })}
        />
        <Notes>
          <ul>
            <li>The first thing we wanted is style colocation.</li>
            <li>Meaning having the style in the same file as the html</li>
            <li>I think it's important, this bring great benefits:</li>
            <li>
              <ul>
                <li>It minimize context shifting</li>
                <li>You don't have to name everything</li>
                <li>having the style close also open doors for more dynamic logic with JavaScript</li>
              </ul>
              <li>People who truly want separation of concerns can still get it</li>
            </li>
            {/* Side fun note: http://react-toolbox.io/ */}
          </ul>
          5m55s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Style colocation
        </Heading>
        <Text>CSS Modules 🤔</Text>
        <Notes>
          <ul>
            <li>In that context CSS Modules isn't great.</li>
            {/* Side fun note: http://react-toolbox.io/ */}
          </ul>
          6m00s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Plain vs. Atomic classes
        </Heading>
        <Notes>
          <ul>
            <li>Another very structuring choice is deciding on adopting Atomic classes or not</li>
          </ul>
          6m05s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary" className={css({ marginBottom: '0 !important' })}>
          Plain vs. Atomic classes
        </Heading>
        {/* TODO: Conflict between Pigment CSS and Styled components https://github.com/mui/pigment-css/issues/80 */}
        <Text fontSize="2rem" color="secondary" className={css({ marginTop: '0 !important' })}>
          Atomic class names
        </Text>
        <Image src="/images/class-atomic.png" width="60%" className={css({ margin: '0px auto' })} />
        <Notes>
          <ul>
            <li>Lately, we have seen more atomic classes solutions emerge</li>
            <li>
              They are interesting because for small and medium size applications, they allow to
              have a single CSS file, while keeping it fast enough. It's simplers.
            </li>
            <li>Now, it's not all bright</li>
            <li>
              In development, you get hard to debug style, and heavy DOM that is hard to inspect.
            </li>
          </ul>
          6m20s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary" className={css({ marginBottom: '0 !important' })}>
          Plain vs. Atomic classes
        </Heading>
        <Text fontSize="2rem" color="secondary" className={css({ marginTop: '0 !important' })}>
          Plain class names
        </Text>
        <Image src="/images/class-plain.png" width="60%" className={css({ margin: '0px auto' })} />
        <Notes>
          <ul>
            <li>For me, the dream output in development is the one we used to have in Material UI v4.</li>
            <li>
              Clear class name and not too heavy DOM. It really helps to understand your styling strucutre.
            </li>
          </ul>
          6m40s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary" className={css({ marginBottom: '0 !important' })}>
          Plain vs. Atomic classes
        </Heading>
        <Text fontSize="2rem" color="secondary" className={css({ marginTop: '0 !important' })}>
          Growing applications
        </Text>
        <UnorderedList>
          <ListItem>Atomic classes keep the CSS file small</ListItem>
          <ListItem>But nested selectors have good use cases</ListItem>
        </UnorderedList>
        <Notes>
          <ul>
            <li>And what about larger applications?</li>
            <li>Atomic classes works if you avoid as much as possible nested selectors. It doesn't scale otherwise</li>
            <li>But nested selectors have good use cases</li>
          </ul>
          7m00s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary" className={css({ marginBottom: '0 !important' })}>
          Plain vs. Atomic classes
        </Heading>
        <Text fontSize="2rem" color="secondary" className={css({ marginTop: '0 !important' })}>
          Granular style loading
        </Text>
        <UnorderedList>
          <ListItem>Only loading the CSS you need for the page</ListItem>
          <ListItem>Do you still need atomic classes?</ListItem>
        </UnorderedList>
        <Notes>
          <ul>
            <li>
              So to scale the application, even with atomic classes, you eventually need granular style loading
            </li>
            <li>Meaning only loading the CSS for the elements that are on the page.</li>
            <li>But once you get granular style loading, how much do you need atomic classes to improve performance? Hum</li>
          </ul>
          7m25s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary" className={css({ marginBottom: '0 !important' })}>
          Plain vs. Atomic classes
        </Heading>
        <Text fontSize="2rem" color="secondary" className={css({ marginTop: '0 !important' })}>
          Granular style loading
        </Text>
        <Image src="/images/future-of-css.png" width="80%" className={css({ margin: '0 auto' })} />
        <Text fontSize="1rem" color="secondary" textAlign="center" className={css({ textDecoration: 'underline' })}>
          reactwg/react-18#108
        </Text>
        <Notes>
          <ul>
            {/* Same point in https://github.com/vercel/next.js/discussions/59989#discussioncomment-9409037 */}
            <li>
              For those that have time to rewatch my talk, I have included a quote from Sebastian Markbåge on the need for granular style loading.
            </li>
          </ul>
          7m30s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Plain vs. Atomic classes
        </Heading>
        <UnorderedList>
          <ListItem>Emotion, Styled component 👍</ListItem>
          <ListItem>StyleX, Tailwind CSS, Panda CSS 🤔</ListItem>
        </UnorderedList>
        <Notes>
          <ul>
            <li>It's one of the areas where Emotion perform well</li>
            <li>The more recently libraries are not as exciting for me.</li>
            <li>Atomic classes yes, but please not in development. And more importantly</li>
            <li>
              I think we, as a community, should move toward making granular style loading core to how we do CSS like it's for JavaScript.
            </li>
          </ul>
          7m45s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Familiarity
        </Heading>
        <UnorderedList>
          <ListItem>Am I good to go with what I already know about CSS?</ListItem>
        </UnorderedList>
        <Appear>
          <UnorderedList>
            <ListItem>StyleX 🤔</ListItem>
            <ListItem>Tailwind CSS 🤔🤔</ListItem>
          </UnorderedList>
        </Appear>
        <Notes>
          <ul>
            <li>Now, familiarity</li>
            <li>Do I have to learn a new API?</li>
            <li>I have a limit memory capacity, I espetially don't want the need for a cheatsheet</li>
          </ul>
          8m00s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Backward compatible
        </Heading>
        <UnorderedList>
          <ListItem>What if the solution was only about replacing imports? 😍</ListItem>
        </UnorderedList>
        <Notes>
          <ul>
            <li>
              Last, backward compatible. We have experienced first hand when moving from JSS to
              Emotion how painful the migration was for the ecosystem.
            </li>
            <li>Spending time to migrate is tricky</li>
            <li>What if it the solution was only about replacing imports? Wouldn't to be amazing?</li>
            <li>
              The styled-components API feels just fine. Why should I learn something new or spend a
              lot of time migrating?
            </li>
          </ul>
          8m30s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer>
          <Pigment />
        </SlideContainer>
        <Notes>
          <ul>
            <li>This is where Pigment CSS steps in</li>
            <li>A new CSS-in-JS library that we have been working on for the last 12 months</li>
          </ul>
          8m45s
        </Notes>
      </Slide>
      <Slide>
        <video
          controls
          playsInline
          className={css({
            width: '100%',
            margin: '0 auto',
          })}
        >
            <source src="/images/anotherone.mov" type="video/mp4"></source>
        </video>
        <Notes>
          <ul>
            <li>I known what you are thinking</li>
            <li>Another one?</li>
          </ul>
          9m00s
        </Notes>
      </Slide>
      <Slide>
        <Image
          src="/images/code-example.png"
          width="50%"
          className={css({
            margin: '30px auto',
          })}
        />
        <Notes>
          <ul>
            <li>This is how it looks like</li>
            <li>It's pretty much the same as Emotion</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Key design decisions
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>No runtime</ListItem>
          </Appear>
          <Appear>
            <ListItem>A runtime fallback</ListItem>
          </Appear>
          <Appear>
            <ListItem>Granular style loading</ListItem>
          </Appear>
          <Appear>
            <ListItem>RSC support</ListItem>
          </Appear>
          <Appear>
            <ListItem>As few breaking changes as possible</ListItem>
          </Appear>
        </UnorderedList>
        <Notes>
          <ul>
            <li>These has been or key design decisions</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Performance
        </Heading>
        <Image src="/images/benchmark-after.png" width="50%" className={css({ margin: 'auto' })} />
        <Notes>
          <ul>
            <li>This is how it looks like now, with the same benchmark.</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          How does it work?
        </Heading>
        <UnorderedList>
          <Appear>
            <ListItem>Started as a fork of Linaria</ListItem>
          </Appear>
          <Appear>
            <ListItem>It transpile the code to generate CSS Modules files</ListItem>
          </Appear>
          <Appear>
            <ListItem>Based on https://github.com/Anber/wyw-in-js</ListItem>
          </Appear>
        </UnorderedList>
        <Notes>
          <ul>
            <li>These has been or key design decisions</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          When does this land?
        </Heading>
        <Image src="/images/josh.png" width="40%" className={css({ margin: '0px auto' })} />
        <Notes>
          <ul>
            <li>When does this land? People have already been playing with it</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Material UI v6
        </Heading>
        <Notes>
          <ul>
            <li>But today, we are focused on making it work with Material UI v6</li>
            <li>We last release Material UI v5.0.0 almost 3 years ago.</li>
            <li>
              With Material UI v6 we have two goals: modernize the library and be compatible with
              Pigment CSS.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Introducing blog post
        </Heading>
        {/* use https://huggingface.co/spaces/huggingface-projects/QR-code-AI-art-generator to make the QR code looks good */}
        <Text
          fontSize="1.8rem"
          color="secondary"
          className={css({ textAlign: 'center !important' })}
        >
          https://mui.com/blog/introducing-pigment-css/
        </Text>
        <Image src="/images/qr.jpg" width="20%" className={css({ margin: '0px auto' })} />
        <Notes>
          <ul>
            <li>
              If you want to learn more about Pigment CSS, you can check our introduction blog post
            </li>
            <li>Thank you</li>
          </ul>
        </Notes>
      </Slide>
    </Deck>
  );
}
