import * as React from 'react';
import { styled, css } from '@pigment-css/react';
import { Template } from './Template';
import { Backdrop } from './Backdrop';
import { Pigment } from './components/Pigment';
import SlideContainer from './components/SlideContainer';
import TitleAndSubtitle from './components/TitleAndSubtitle';
import ImageContainer from './components/ImageContainer';
import Card from './components/Card';
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
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import SlideTest from './slides/SlideTest';
import SlideGodSack from './slides/SlideGodSack';

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
    textTertiary: 'hsl(210, 20%, 55%)',
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

function setFullScreen() {
  document.documentElement.requestFullscreen();
}

// Support presentation dongles
function KeyboardShortcut() {
  const deckContext = React.useContext(DeckContext);

  if (deckContext.useAnimations) {
    useMousetrap(
      {
        pageup: deckContext.stepBackward,
        pagedown: deckContext.stepForward,
        f: setFullScreen,
      },
      [],
    );
  }

  return null;
}

export default function Presentation() {
  return (
    <Deck theme={spectacleTheme} transition={transition} template={<Template />}>
      <KeyboardShortcut />
      <Slide className={css({ '& .sc-dAbbOL': { padding: 0 } })}>
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
              styling libraries, and the key properties I think we should look out for a great one.
            </li>
            <li>
              Now, the space might be shaken, but there is hope. I'm also going to introduce Pigment
              CSS, which is part of a next generation of CSS-in-JS libraries movement.
            </li>
          </ul>
          35s
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
          55s
        </Notes>
      </Slide>
      <Slide>
        <Slide3 />
        <Notes>
          <ul>
            <li>You folks seems to be a good sample of the ecosystem.</li>
            <li>
              According to the last State of CSS survey, over half of the community uses one of
              these two libraires.
            </li>
          </ul>
          1m05s
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
          1m20s
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
          1m40s
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
            <li>How is this relevant?</li>
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
              So, the common denominator between them is that all these projects rely on Emotion in
              one way or another, which gave us a good exposure to the problems.
            </li>
          </ul>
          2m30s
        </Notes>
      </Slide>
      <Slide>
        <Slide8 />
        <Notes>
          {/* https://bundlephobia.com/package/styled-components@6.1.11 */}
          <ul>
            <li>The first problem we faced was with performance.</li>
            <li>
              When you install styled-components, you add about 11kB gzipped of JavaScript in your
              bundle. It's because it has a runtime.
            </li>
            <li>
              And you also need to add about 4kB because it works with a rich JavaScript theme and
              some helpers.
            </li>
            <li>So in total, you look at 16 kB.</li>
            <li>
              Now, to be fair, it's not the end of the world, it's about 1/3 of the bundle size
              React uses (45KB).
            </li>
            <li>Still, is it really needed?</li>
          </ul>
          3m00s
        </Notes>
      </Slide>
      <Slide>
        <Slide9 />
        <Notes>
          <ul>
            <li>The runtime takes a performance hit, larger one this time.</li>
            <li>
              Here, you can see how much time it takes to render a table with 1,000 rows with a few
              different approaches.
            </li>
            <li>It's not great with Emotion, you can't use it without virtualization.</li>
          </ul>
          3m30s
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
        <Slide11 />
        <Notes>
          <ul>
            <li>
              If you look at the performance timeline, you will find that it spent about 14% of the
              time generating over and over the same Emotion styles for the rows.
            </li>
            <li>So in theory, we could have 14% fewer blank areas.</li>
            <li>For analyzing data use cases, I think it matters.</li>
          </ul>
          4m00s
        </Notes>
      </Slide>
      <Slide>
        <Slide12 />
        {/*<Image src="/images/user-feedback-2.png" width="55%" className={css({ margin: '5px auto' })} />*/}
        <Notes>
          {/* https://www.reddit.com/r/reactjs/comments/1bzsxa6/take_a_survey_which_ui_component_library_does/?rdt=61541 */}
          <ul>
            <li>And if this wasn't enough, we also hear it from you</li>
            <li>
              Here is a person loving to use Material UI but experiencing frustration with the speed
              of the sx prop.
            </li>
          </ul>
          4m20s
        </Notes>
      </Slide>
      <Slide>
        <Slide13 />
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
            <li>
              The blocking point is the React context API that is not available with RSC, so far.
            </li>
            <li>
              Now, we might be able to use the React cache API to workaround this, but again we
              don't see much work happening there.
            </li>
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
            <li>These problems are too important for MUI to prioritize finding a solution.</li>
            <li>And this is what we did over a year ago.</li>
            <li>Let's look at how we approached this.</li>
          </ul>
          5m00s
        </Notes>
      </SlideLayout.Center>
      <Slide>
        <Slide15 />
        <Notes>
          <ul>
            <li>There are a lot of of options.</li>
            <li>CSS Modules, Inline style, StyleX, Tailwind CSS, Linaria, and so on.</li>
            <li>It's overwhelming to compare them all.</li>
            <li>So let's look at some of the key properties I think we should have</li>
            <li>
              But before a disclaimer, I'm looking at those in my own context and Material UI, these
              solution adopt different tradeoffs, I'm sure they all have context where they are
              best.
            </li>
          </ul>
          5m25s
        </Notes>
      </Slide>
      <Slide>
        <Slide16 />
        <Notes>
          <ul>
            <li>The first thing we wanted is style colocation.</li>
            <li>Meaning having the style in the same file as the html</li>
            <li>I think it's important, this bring great benefits:</li>
            <li>
              <ul>
                <li>It minimize context shifting</li>
                <li>You don't have to name everything</li>
                <li>
                  having the style close also open doors for more dynamic logic with JavaScript
                </li>
              </ul>
              <li>People who truly want separation of concerns can still get it</li>
            </li>
            {/* Side fun note: http://react-toolbox.io/ */}
          </ul>
          5m55s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Style colocation" />
          <Text>CSS Modules 🤔</Text>
        </SlideContainer>
        <Notes>
          <ul>
            <li>In that context CSS Modules isn't great.</li>
            {/* Side fun note: http://react-toolbox.io/ */}
          </ul>
          6m00s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Plain vs. Atomic classes" />
        </SlideContainer>
        <Notes>
          <ul>
            <li>Another key decision is do you use Atomic classes or not</li>
          </ul>
          6m05s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Atomic class names" subtitle="Plain vs. Atomic classes" />
          <ImageContainer width="60%">
            <Image
              src="/images/class-atomic.png"
              width="100%"
              className={css({ margin: '0px auto', borderRadius: 2 })}
            />
          </ImageContainer>
        </SlideContainer>
        <Notes>
          <ul>
            <li>Lately, we have seen a trend of more atomic classes solutions emerge</li>
            <li>
              They are interesting because for small and medium size applications, they allow to
              have a single CSS file, while keeping the app fast. It's simplers.
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
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Plain class names" subtitle="Plain vs. Atomic classes" />
          <ImageContainer width="60%">
            <Image
              src="/images/class-plain.png"
              width="100%"
              className={css({ margin: '0px auto', borderRadius: 2 })}
            />
          </ImageContainer>
        </SlideContainer>
        <Notes>
          <ul>
            <li>
              For me, the dream output in development is the one we used to have in Material UI v4.
            </li>
            <li>
              Clear class name and not too heavy DOM. It really helps to understand your styling
              strucutre.
            </li>
          </ul>
          6m40s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Growing applications" subtitle="Plain vs. Atomic classes" />
          <UnorderedList>
            <ListItem>Atomic classes keep the CSS file small</ListItem>
            <ListItem>But nested selectors have good use cases</ListItem>
          </UnorderedList>
        </SlideContainer>
        <Notes>
          <ul>
            <li>I talked about small and medium size application but what about larger applications?</li>
            <li>Atomic classes works if you avoid as much as possible nested selectors.</li>
            <li>and completely breaks down if you don't</li>
            <li>But nested selectors have good use cases</li>
          </ul>
          7m00s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Granular style loading" subtitle="Plain vs. Atomic classes" />
          <UnorderedList>
            <ListItem>Only loading the CSS you need for the page</ListItem>
            <ListItem>Do you still need atomic classes?</ListItem>
          </UnorderedList>
        </SlideContainer>
        <Notes>
          <ul>
            <li>
              So to scale the application, even with atomic classes, you eventually need granular
              style loading.
            </li>
            <li>Meaning only loading the CSS for the elements that are on the page.</li>
            <li>
              But once you get granular style loading, how much do you need atomic classes to
              improve performance? Hum
            </li>
          </ul>
          7m25s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Granular style loading" subtitle="Plain vs. Atomic classes" />
          <ImageContainer width="80%">
            <Image
              src="/images/future-of-css.png"
              width="100%"
              className={css({ margin: '0 auto', borderRadius: 2 })}
            />
          </ImageContainer>
          <Text
            fontSize="1rem"
            color="secondary"
            textAlign="center"
            className={css({ textDecoration: 'underline', margin: '-50px auto', width: '100%' })}
          >
            reactwg/react-18#108
          </Text>
        </SlideContainer>
        <Notes>
          <ul>
            {/* Same point in https://github.com/vercel/next.js/discussions/59989#discussioncomment-9409037 */}
            <li>
              You don't have to trust me, you can trust the former React Tech Lead, Sebastian Markbåge. Here is
              a quote on the need for granular style loading that you can read on the replay of my
              talk.
            </li>
          </ul>
          7m30s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="So, which should we pick?" subtitle="Plain vs. Atomic classes" />
          <span
            className={css({
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
            })}
          >
            <span
              className={css({
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '.5rem',
                padding: '0 3rem',
                '> span': {
                  width: '70%',
                },
              })}
            >
              <Text fontSize="1.3rem" color="textPrimary" fontWeight="500">
                Granular style loading 👍
              </Text>
              <Card>
                <Text fontSize="1.5rem" color="textPrimary" fontWeight="500">
                  Emotion / styled-components
                </Text>
              </Card>
              <Card>
                <Text fontSize="1.5rem" color="textPrimary" fontWeight="500">
                  CSS Modules / Linaria
                </Text>
              </Card>
            </span>
            <hr
              className={css({
                all: 'unset',
                height: '100%',
                width: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              })}
            />
            <span
              className={css({
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '.5rem',
                padding: '0 3rem',
                '> span': {
                  width: '70%',
                },
              })}
            >
              <Text fontSize="1.3rem" color="textTertiary" fontWeight="500">
                Atomic classes 🤔
              </Text>
              <Card>
                <Text fontSize="1.5rem" color="textPrimary" fontWeight="500">
                  Tailwind CSS
                </Text>
              </Card>
              <Card>
                <Text fontSize="1.5rem" color="textPrimary" fontWeight="500">
                  Panda CSS
                </Text>
              </Card>
              <Card>
                <Text fontSize="1.5rem" color="textPrimary" fontWeight="500">
                  StyleX
                </Text>
              </Card>
            </span>
          </span>
        </SlideContainer>
        <Notes>
          <ul>
            <li>So, which library should we pick here?</li>
            <li>I think it's one of the areas where Emotion performs the best</li>
            <li>The more recently libraries are not as exciting for me.</li>
            <li>Atomic classes yes, but please not in development. And more importantly</li>
            <li>
              If I could only get one outcome from my talk, is that I wish I could inspire the community to move toward making granular style loading, the same way we take JavaScript code splitting very seriously.
            </li>
          </ul>
          7m45s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Familiarity" subtitle="Considerations" />
          <UnorderedList>
            <ListItem>Am I good to go with what I already know about CSS?</ListItem>
          </UnorderedList>
        </SlideContainer>
        <Notes>
          <ul>
            <li>Another dimension, familiarity</li>
            <li>Do I have to learn a new API? Or can I rely on my existing knowledge?</li>
            <li>I don't want to have to rely on a cheat sheet </li>
            <li>Maybe you are a Designer. I personaly have limited memory capacity.</li>
          </ul>
          8m00s
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Backwards compatible" subtitle="Considerations" />
          <UnorderedList>
            <ListItem>What if the solution was only about replacing imports? 😍</ListItem>
          </UnorderedList>
        </SlideContainer>
        <Notes>
          <ul>
            <li>
              Last, backward compatible. We experienced first hand when moving from JSS to Emotion
              how painful the migration was for the ecosystem.
            </li>
            <li>What if the solution was only about replacing imports? Wouldn't to be amazing?</li>
            <li>The styled-components API, it feels fine.</li>
          </ul>
          8m30s
        </Notes>
      </Slide>
      <Slide className={css({ '& .sc-dAbbOL': { padding: 0 } })}>
        <SlideContainer>
          <Pigment />
        </SlideContainer>
        <Notes>
          <ul>
            <li>This is where Pigment CSS steps in</li>
            <li>
              A new CSS-in-JS library that we have been working on at MUI for the last 12 months
            </li>
            <li>----</li>
            <li>I known what you are thinking</li>
            <li>Another one?</li>
          </ul>
          8m45s
        </Notes>
      </Slide>
      <Slide className={css({ '& .sc-dAbbOL': { padding: 0, justifyContent: 'center' } })}>
        <SlideGodSack />
        <Notes>
          <ul>
            {/* The use of https://www.gov.uk/guidance/exceptions-to-copyright seems legal */}
          </ul>
          9m00s
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Why?
        </Heading>
        {/* Source https://www.figma.com/design/tQ4ItyDhQQ77B68QDVx7Ys/Untitled?node-id=1-2&t=RKZxegL0vZPl4dnq-0 */}
        <Image
          src="/images/tradeoff.png"
          width="50%"
          className={css({
            margin: '30px auto',
          })}
        />
        <Notes>
          <ul>
            <li>So Why are we doing that?</li>
            <li>If you map the space, having on one side the effort it takes to migrate</li>
            <li>And on the other, how much the solution relies on JavaScript.</li>
            <li>You get this chart</li>
            <li>
              Starting from Emotion, we had to choose between either go toward CSS only, so toward
              CSS Modules or Tailwind CSS
            </li>
            <li>But at the expense of a costly migration and giving up on some nice features</li>
            <li>
              Or go the other way, into Babel or even Rust code transformation with bundlers
              integration and get the nicest features.
            </li>
            <li>
              Inspired by the work done on the React Compiler, and not seeing projects attemping it,
              we felt it had to be tried, nobody else was going to do it.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Why?
        </Heading>
        {/* Source https://www.figma.com/design/tQ4ItyDhQQ77B68QDVx7Ys/Untitled?node-id=1-2&t=RKZxegL0vZPl4dnq-0 */}
        <Image
          src="/images/tradeoff-after.png"
          width="50%"
          className={css({
            margin: '30px auto',
          })}
        />
        <Notes>
          <ul>
            <li>And this is where Pigment CSS fits</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Image
          src="/images/code-example.png"
          width="50%"
          className={css({
            margin: '30px auto',
            borderRadius: '.65rem',
          })}
        />
        <Notes>
          <ul>
            <li>This is how it looks like</li>
            <li>It's pretty much the same as Emotion</li>
            <li>With an extra `sx` prop for quick iterations that even works on primitives</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Key design decisions" subtitle="Pigment CSS" />
          <UnorderedList>
            <Appear>
              <ListItem>No runtime (but with fallback)</ListItem>
            </Appear>
            <Appear>
              <ListItem>RSC support</ListItem>
            </Appear>
            <Appear>
              <ListItem>Granular style loading</ListItem>
            </Appear>
            <Appear>
              <ListItem>As few breaking changes as possible</ListItem>
            </Appear>
            <Appear>
              <ListItem>Being able to add atomic CSS later down the road for production</ListItem>
            </Appear>
          </UnorderedList>
        </SlideContainer>
        <Notes>
          <ul>
            <li>These has been our key design decisions</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Performance" subtitle="Pigment CSS" />
          <ImageContainer width="55%">
            <Image
              src="/images/benchmark-before.png"
              width="100%"
              className={css({ margin: 'auto' })}
            />
          </ImageContainer>
        </SlideContainer>
        <Notes>
          <ul>
            <li>This is how it looks like now, with the same benchmark.</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="Performance" subtitle="Pigment CSS" />
          <ImageContainer width="80%">
            <Image
              src="/images/benchmark-after.png"
              width="100%"
              className={css({ margin: 'auto' })}
            />
          </ImageContainer>
        </SlideContainer>
        <Notes>
          <ul>
            <li>This is how it looks like now, with the same benchmark.</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor noHeight>
          <TitleAndSubtitle title="How does it work?" subtitle="Pigment CSS" />
        </SlideContainer>
        <div className={css({ marginTop: '-50px', padding: '0 4rem' })}>
          <UnorderedList>
            <Appear>
              <ListItem>Started as a fork of Linaria</ListItem>
            </Appear>
            <Appear>
              <ListItem>Shares logic with WyW-in-js</ListItem>
            </Appear>
            <Appear>
              <ListItem>It transpiles the code to generate CSS Module files</ListItem>
            </Appear>
          </UnorderedList>
        </div>
        <Notes>
          <ul>
            <li>These has been or key design decisions</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <SlideContainer leftAligned noBgColor>
          <TitleAndSubtitle title="When does this land?" subtitle="Pigment CSS" />
          <ImageContainer width="35%">
            <Image src="/images/josh.png" width="100%" />
          </ImageContainer>
        </SlideContainer>
        <Notes>
          <ul>
            <li>When does this land?</li>
            <li>It's in alpha, but people have already been playing with it.</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontWeight="500" color="primary">
          Material UI v6
        </Heading>
        <Image src="/images/material-ui.png" width="65%" className={css({ margin: '0 auto' })} />
        <Notes>
          <ul>
            <li>Today, we are focused on making it work with Material UI v6</li>
            <li>We last released Material UI v5 almost 3 years ago.</li>
            <li>
              With Material UI v6 we have two goals: modernize the library and be compatible with
              Pigment CSS (which is opt-in).
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        {/* use https://huggingface.co/spaces/huggingface-projects/QR-code-AI-art-generator to make the QR code looks good */}
        <Text
          fontSize="1.5rem"
          color="textPrimary"
          fontWeight="500"
          className={css({ textAlign: 'center !important', margin: '0px !important' })}
        >
          Learn more about Pigment CSS
          <br />
          <Text
            fontSize="1.5rem"
            color="brandBlue"
            className={css({ textAlign: 'center !important', margin: '0 0 16px 0 !important' })}
          >
            👉 mui.com/r/pigment
          </Text>
        </Text>
        <Image src="/images/blog-post.png" width="100%" className={css({ margin: '0 auto' })} />
        <Notes>
          <ul>
            <li>
              If you want to learn more about Pigment CSS, you can check our introduction blog post
            </li>
            <li>Thank you</li>
          </ul>
        </Notes>
      </Slide>
      <SlideTest />
    </Deck>
  );
}
