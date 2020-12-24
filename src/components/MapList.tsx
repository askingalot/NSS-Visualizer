import { Card } from 'semantic-ui-react';
import { MapListProps } from '../types';
import { MapCard } from './MapCard';

export function MapList({ maps }: MapListProps) {
  return (
    <>
      <Card.Group itemsPerRow={2} centered>
        {maps.map((m) => (
          <MapCard key={m.id} map={m} />
        ))}
      </Card.Group>
    </>
  );
}
