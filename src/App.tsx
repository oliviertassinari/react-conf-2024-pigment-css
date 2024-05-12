import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import { css } from '@pigment-css/react';
import { Template } from './Template';
import { Backdrop } from './Backdrop';
import { Slide, SlideLayout, Heading, Text, Deck, Image, Notes } from 'spectacle';
import { rawTheme } from '../rawTheme';

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

export default function Presentation() {
  return (
    <Deck theme={spectacleTheme} transition={transition} template={<Template />}>
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
              libraries, and the key properties I think you should look out for a great styling
              solutions.
            </li>
            <li>
              Now, React Server Components might shake the space, but there is hope. I'm also going
              to introduce Pigment CSS, which is part of a next generation of CSS-in-JS
              libraries movement.
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
            <li>Who here is currently using styled-components or Emotion?</li>
            <li>🙆‍♂️</li>
            <li>I see xx% of the audience who raised their hands</li>
          </ul>
          60s
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
        </Notes>
        1m10s
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
        </Notes>
        1m30s
      </Slide>
      <Slide>
        <Slide5 />
        <Notes>
          <ul>
            <li>
              And again, it's consistent with the same State of CSS survey.
            </li>
            <li>
              You can see a clear decline of interest in styled-components and Emotion since a year ago.
            </li>
          </ul>
          1m45s
        </Notes>
      </Slide>
      <SlideLayout.Section>
        The challenges
        <Notes>
          <ul>
            <li>What's going on?</li>
          </ul>
          1m50s
        </Notes>
      </SlideLayout.Section>
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
              way or another, which gave us a good exposure to the problems.
            </li>
            <li>And we are facing two main challenges:</li>
          </ul>
          2m45s
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          Performance
        </Text>
        <Heading fontWeight="500" color="primary">
          11 + 4 = 16 kB gzipped of bundle size
        </Heading>
        <Image src="/images/bundle-size.png" width="50%" className={css({ margin: '30px auto' })} />
        <Notes>
          {/* https://bundlephobia.com/package/styled-components@6.1.11 */}
          <ul>
            <li>First, we face challenges with performance</li>
            <li>The bundle size of the application takes a hit, styled-components adds about 11kB gzipped because they have a runtime.</li>
            <li>
              Plus about 4kB to the bundle size because it works with a rich JavaScript theme and it's color
              transformation tools.
            </li>
            <li>
              So in total, maybe 16 kB.
            </li>
            <li>
              To be fair, it's not the end of the day, if you compare it to the bundle size of React, you have 45KB.
            </li>
            <li>Still, is it really needed?</li>
          </ul>
          3m15s
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          Performance
        </Text>
        <Heading fontWeight="500" color="primary">
          Runtime
        </Heading>
        <Image src="/images/.png" width="50%" className={css({ margin: 'auto' })} />
        <Notes>
          <ul>
            <li>The runtime takes a much larger hit</li>
            <li>Here, you can see how much time it take to render a table with 1,000 rows.</li>
            <li>It's not great, you can't use Emotion without virtualization.</li>
          </ul>
          3m35s
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          Performance
        </Text>
        <Heading fontWeight="500" color="primary">
          Data Grid
        </Heading>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={css({
            width: '40%',
            margin: 'auto',
          })}
        >
            <source src="/images/data-grid.mov" type="video/mp4"></source>
        </video>
        <Notes>
          {/* https://mui.com/x/react-data-grid/#pro-plan
https://github.com/mui/mui-x/issues/11866#issuecomment-1963168133 */}
          <ul>
            <li>Let's say you add add virtualization, it's still not great.</li>
            <li>
              This is our data grid, rendering 100,000 rows with CPU throttling by a factor 6.
            </li>
            <li>
              Even then, if you look at the time it takes to render each row, we spent about 14% of the time generating over and over the same styles.
            </li>
            <li>
              So in theory, we could have 14% less white screen area. For navigating a lot of data, it matters.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          Performance
        </Text>
        <Heading fontWeight="500" color="primary">
          Data Grid
        </Heading>
        <Image src="/images/data-grid.png" width="50%" className={css({ margin: 'auto' })} />
        <Notes>
          <ul>
            <li>.</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          Performance
        </Text>
        <Image src="/images/user-feedback-1.png" width="55%" className={css({ margin: '50px auto 20px' })} />
        <Image src="/images/user-feedback-2.png" width="55%" className={css({ margin: '5px auto' })} />
        <Notes>
          {/* https://www.reddit.com/r/reactjs/comments/1bzsxa6/take_a_survey_which_ui_component_library_does/?rdt=61541 */}
          <ul>
            <li>And if this wasn't enough, some user feedback validation</li>
            <li>
              A user loving the sx prop, as a quick say to apply CSS and with smart shorthands, but
              not fast enough.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Text fontSize="2rem" color="secondary">
          RSC support
        </Text>
        <Image
          src="/images/rsc-emotion.png"
          width="50%"
          className={css({ position: 'absolute', borderRadius: 4, top: 150, transform: 'rotate(-1deg)' })}
        />
        <Image
          src="/images/rsc-sc.png"
          width="50%"
          className={css({ position: 'absolute', borderRadius: 4, top: 150, left: '50%', transform: 'rotate(4deg)' })}
        />
        <Notes>
          {/*
https://github.com/emotion-js/emotion/issues/2978
https://github.com/styled-components/styled-components/issues/4025
          */}
          <ul>
            <li>The second key problem is with the support of React Server Components</li>
            <li>Nor styled components or Emotion are compatible with it.</li>
            <li>We are blocked the React context API not working with RSC.</li>
          </ul>
        </Notes>
      </Slide>
      <SlideLayout.Section>
        The options
        <Notes>
          <ul>
            <li>These problems are too important, we need to take action.</li>
            <li>Which we what we started doing at MUI over a year ago.</li>
            <li>
              Let's look at the key dimensions I think should be considered, but also for the sake
              of illustrating them, see how they translate into specific libraries.
            </li>
          </ul>
        </Notes>
      </SlideLayout.Section>
    </Deck>
  );
}
