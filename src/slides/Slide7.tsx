import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import Card from '../components/Card';
import { Heading, Text } from 'spectacle';

export default function Slide2() {
  return (
    <SlideContainer noBgColor>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          '& > div': {
            margin: 0,
            padding: 0,
          },
          '& > ul': {
            width: '100%',
          },
        })}
      >
        <Text fontSize="1.5rem" color="secondary" fontWeight="500">
          The MUI ecosystem
        </Text>
        <Heading fontWeight="500" color="primary">
          The open-source projects we fund
        </Heading>
        <section
          className={css({
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          })}
        >
          <Card>
            <Text fontSize="1.8rem" color="primary" fontWeight="500">
              Material UI
            </Text>
          </Card>
          <Card>
            <Text fontSize="1.8rem" color="primary" fontWeight="500">
              Base UI
            </Text>
          </Card>
          <Card>
            <Text fontSize="1.8rem" color="primary" fontWeight="500">
              MUI X
            </Text>
          </Card>
          <Card>
            <Text fontSize="1.8rem" color="primary" fontWeight="500">
              Toolpad
            </Text>
          </Card>
        </section>
      </div>
    </SlideContainer>
  );
}