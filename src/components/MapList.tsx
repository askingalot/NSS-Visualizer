import { Card } from 'semantic-ui-react';
import { MapListProps } from '../types';
import { MapCard } from './MapCard';

export function MapList({ maps, deleteMap }: MapListProps) {
  return (
    <>
      <Card.Group itemsPerRow={2} centered>
        {maps.map((m) => (
          <MapCard key={m.id} map={m} deleteMap={deleteMap} />
        ))}
      </Card.Group>
    </>
  );
}
