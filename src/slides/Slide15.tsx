import { css } from '@pigment-css/react';
import SlideContainer from '../components/SlideContainer';
import Card from '../components/Card';
import { Text } from 'spectacle';

export default function Slide15() {
  return (
    <SlideContainer noBgColor leftAligned>
      <section
        className={css({
          margin: 'auto',
          marginTop: '8rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        })}
      >
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Inline styles
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            CSS Modules
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            StyleX
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Tailwind CSS
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Linaria
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Panda CSS
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            Tokanami
          </Text>
        </Card>
        <Card>
          <Text fontSize="2.2rem" color="textSecondary" fontWeight="500">
            etc...
          </Text>
        </Card>
      </section>
    </SlideContainer>
  );
}
