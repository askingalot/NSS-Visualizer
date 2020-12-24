import { Card } from 'semantic-ui-react';
import { Map } from '../types';

export function MapCard({ map }: { map: Map }) {
  return (
    <Card
      header={map.title}
      meta={map.authorName}
      description={map.description}
      href={map.link.href}
      target="_new"
    />
  );
}
