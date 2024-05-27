import { css, styled } from '@pigment-css/react';
import { Slide } from 'spectacle';

const TestStyleLint = styled('span')`
  color: rgba(0, 0, 0, 0);
  cursor: disabled;
`;

const bar = css`
  color: rgba(255, 0, 0, 1);
`

export default function Slide15() {
  return (
    <Slide>
      <div className={bar}>
        Hello
      </div>
    </Slide>
  );
}
