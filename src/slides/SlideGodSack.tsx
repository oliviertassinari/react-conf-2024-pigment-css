import { css } from '@pigment-css/react';

export default function SlideGodSack() {
  return (
    <video
    playsInline
    className={css({
      width: '100%',
      margin: '0 auto',
    })}
    >
      <source src="/images/anotherone.mov" type="video/mp4"></source>
    </video>
  );
}
