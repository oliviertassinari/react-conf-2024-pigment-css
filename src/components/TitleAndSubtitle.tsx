import { css } from '@pigment-css/react';
import { Heading, Text } from 'spectacle';

export default function TitleAndSubtitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > div': {
          margin: 0,
          padding: 0,
          textAlign: 'left',
        },
      })}
    >
      <Text fontSize="1.5rem" color="brandBlue" fontWeight="500">
        {subtitle}
      </Text>
      <Heading fontWeight="500" color="primary">
        {title}
      </Heading>
    </div>
  );
}
