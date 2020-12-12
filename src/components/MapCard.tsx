import {Map} from '../types';

export function MapCard({map}: {map: Map}) {
  return (
    <section className='map-card'>
      <header className='map-card__title'>{map.title}</header>
      <div className='map-card__description'>{map.description}</div>
      <div className='map-card__author'>{map.author}</div>
      <a className='map-card__link' target='_new' href={map.link.href}>
        {map.link.href}
      </a>
    </section>
  );
}
