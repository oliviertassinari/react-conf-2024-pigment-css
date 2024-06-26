import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import Card from '../components/Card';
import TitleAndSubtitle from '../components/TitleAndSubtitle';
import { Text } from 'spectacle';

export default function Slide7() {
  return (
    <SlideContainer noBgColor leftAligned>
      <TitleAndSubtitle title="The open-source projects we fund" subtitle="The MUI ecosystem" />
      <section
        className={css({
          margin: 'auto',
          marginTop: '8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        })}
      >
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Base UI
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Material UI
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            MUI X
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Toolpad
          </Text>
        </Card>
      </section>
    </SlideContainer>
  );
}
