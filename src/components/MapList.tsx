import React from 'react';
import {MapListProps} from '../types';

export function MapList({maps, user}: MapListProps) {
  return (
    <>
      <div>You are: {user.name}</div>
      {maps.map((m) => (
        <div key={m.id}>{m.title}</div>
      ))}
    </>
  );
}
