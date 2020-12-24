import { Card } from 'semantic-ui-react';
import { Author } from '../types';

export function AuthorCard({ author }: { author: Author }) {
  return (
    <Card
      header={`${author.firstName} ${author.lastName}`}
      meta={author.cohort}
      description={author.website?.href}
      href={author.website?.href}
      target="_new"
    />
  );
}