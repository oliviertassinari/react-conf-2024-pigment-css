import * as React from 'react';
import { css } from '@pigment-css/react';
import Slide1 from './Slide1';
import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Image,
  Box,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  FullScreen,
  Notes,
  SlideLayout,
  codePaneThemes,
} from 'spectacle';
import { rawTheme } from '../rawTheme';

const formidableLogo = 'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

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

function Template() {
  return (
    <div
      className={css({
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        opacity: 0,
        height: 45,
        alignItems: 'center',
        pointerEvents: 'all',
        transition: 'opacity 200ms ease',
        '&:hover': {
          opacity: 1,
        },
      })}
    >
      <div className={css({ padding: '8px 12px', cursor: 'pointer' })}>
        <FullScreen />
      </div>
    </div>
  );
}

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
              that the team working on Material UI found.
            </li>
            <li>Let's get into it!</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading>Who is using styled-components or Emotion?</Heading>
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
        <Image src="/styled-components.png" width="100%" />
        <Notes>
          <ul>
            <li>You are not alone</li>
            <li>
              Accoding to the stateofcss survey, over 50% of the frontend community uses one of
              these to
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading>Who feels great about it?</Heading>
        <Notes>
          <ul>
            <li>Who is using styled-components or Emotion today?</li>
            <li>Please raise your hand</li>
            <li>Ok, so I see xx% of the audience who raised their hands</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px" fontSize="150px">
            ✨<i>Spectacle</i> ✨
          </Heading>
          <Heading margin="0px" fontSize="h2">
            A ReactJS Presentation Library
          </Heading>
          <Heading margin="0px 32px" color="primary" fontSize="h3">
            Where you can write your decks in JSX, Markdown, or MDX!
          </Heading>
        </FlexBox>
      </Slide>
      <Slide
        backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
        backgroundOpacity={0.5}
      >
        <Heading>Custom Backgrounds</Heading>
        <UnorderedList>
          <ListItem>
            <CodeSpan>backgroundColor</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundImage</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundOpacity</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundSize</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundPosition</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundRepeat</CodeSpan>
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Animated Elements</Heading>
        <OrderedList>
          <Appear>
            <ListItem>Elements can animate in!</ListItem>
          </Appear>
          <Appear>
            <ListItem>Out of order</ListItem>
          </Appear>
          <Appear priority={0}>
            <ListItem>
              Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
            </ListItem>
          </Appear>
        </OrderedList>
      </Slide>
      <Slide>
        <FlexBox>
          <Text>These</Text>
          <Text>Text</Text>
          <Text color="secondary">Items</Text>
          <Text fontWeight="bold">Flex</Text>
        </FlexBox>
        <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Text color="secondary">Single-size Grid Item</Text>
          </Box>
          <Box backgroundColor="secondary">
            <Text>Double-size Grid Item</Text>
          </Box>
        </Grid>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridTemplateRows="1fr 1fr 1fr" gridRowGap={1}>
          {Array(9)
            .fill('')
            .map((_, index) => (
              <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
                <Image src={formidableLogo} width={100} />
              </FlexBox>
            ))}
        </Grid>
      </Slide>
      <Slide>
        <CodePane language="jsx" theme={codePaneThemes.a11yDark}>{`
          import { createClient, Provider } from 'urql';

          const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

          const App = () => (
            <Provider value={client}>
              <Todos />
            </Provider>
          );
          `}</CodePane>
        <Box height={20} />
        <CodePane language="java" showLineNumbers={false}>{`
          public class NoLineNumbers {
            public static void main(String[] args) {
              System.out.println("Hello");
            }
          }
          `}</CodePane>
      </Slide>
      <div>
        <Slide>
          <Heading>This is a slide embedded in a div</Heading>
        </Slide>
      </div>
      <MarkdownSlide componentProps={{ color: 'yellow' }}>
        {`
          # This is a Markdown Slide

          - You can pass props down to all elements on the slide.
          - Just use the \`componentProps\` prop.
          `}
      </MarkdownSlide>
      <MarkdownSlide animateListItems>
        {`
        # This is also a Markdown Slide

        It uses the \`animateListItems\` prop.

        - Its list items...
        - ...will appear...
        - ...one at a time.
        `}
      </MarkdownSlide>
      <Slide>
        <Grid gridTemplateColumns="50% 50%" gridTemplateRows="50% 50%" height="100%">
          <FlexBox alignItems="center" justifyContent="center">
            <Heading>This is a 4x4 Grid</Heading>
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Text textAlign="center">With all the content aligned and justified center.</Text>
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Text textAlign="center">
              It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
              <CodeSpan>{'<FlexBox />'}</CodeSpan> components.
            </Text>
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Box width={200} height={200} backgroundColor="secondary" />
          </FlexBox>
        </Grid>
      </Slide>
      <MarkdownSlideSet>
        {`
          # This is the first slide of a Markdown Slide Set
          ---
          # This is the second slide of a Markdown Slide Set
          `}
      </MarkdownSlideSet>
      <SlideLayout.List
        title="Slide layouts!"
        items={['Two-column', 'Lists', 'And more!']}
        animateListItems
      />
    </Deck>
  );
}
