import {MapListProps} from '../types';
import { MapCard } from './MapCard';

export function MapList({maps, user}: MapListProps) {
  return (
    <article className="map-list">
      <div>You are: {user.name}</div>
      {maps.map((m) => (
        <MapCard key={m.id} map={m}/>
      ))}
    </article>
  );
}
