import { css } from '@pigment-css/react';
import { Text } from 'spectacle';

export default function ChartSubtitle({ color, label }: { color: string; label: string }) {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
      })}
    >
      <div
        className={css({
          width: '16px',
          height: '16px',
          borderRadius: '4px',
        })}
        style={{ backgroundColor: color }}
      />
      <Text fontSize=".875rem" color="textSecondary" fontWeight="400">
        {label}
      </Text>
    </div>
  );
}
