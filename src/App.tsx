import * as React from 'react';
import { styled, css, keyframes } from '@pigment-css/react';
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
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  DefaultTemplate,
  SlideLayout,
  codePaneThemes
} from 'spectacle';

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

const theme = {
  colors: {
    primary: '#fff',
    secondary: 'hsl(210, 100%, 60%)',
    tertiary: '#000',
    quaternary: 'red',
    quinary: 'red',
  },
  // backdropStyle: {
  //   // backgroundColor: '#000',
  // },
  fontSizes: {
    header: '64px',
    paragraph: '28px'
  },
  fonts: {
    header: '"General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    text: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
  }
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
  }
};

export default function Presentation() {
  return (
    <Deck theme={theme} template={<DefaultTemplate />} transition={transition}>
      <Slide>
        <Slide1 />
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <SpectacleLogo size={500} />
        </FlexBox>
        <Notes>
          Spectacle supports notes per slide.
          <ol>
            <li>Notes can now be HTML markup!</li>
            <li>Lists can make it easier to make points.</li>
          </ol>
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
        <Grid
          gridTemplateColumns="1fr 1fr 1fr"
          gridTemplateRows="1fr 1fr 1fr"
          gridRowGap={1}
        >
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
        <Grid
          gridTemplateColumns="50% 50%"
          gridTemplateRows="50% 50%"
          height="100%"
        >
          <FlexBox alignItems="center" justifyContent="center">
            <Heading>This is a 4x4 Grid</Heading>
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Text textAlign="center">
              With all the content aligned and justified center.
            </Text>
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
