import { Button, Card } from 'semantic-ui-react';
import { AuthorCardProps } from '../types/types';

export function AuthorCard({ author, deleteAuthor }: AuthorCardProps) {
  const deleteClick = async () => {
    if (confirm(`Are you sure you want to delete ${author.firstName} ${author.lastName} and all of their maps?`)) {
      await deleteAuthor(author.id);
    }
  };

  const editClicked = () => {
    alert("Edit!");
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {author.firstName} {author.lastName}
        </Card.Header>
        <Card.Meta>{author.cohort}</Card.Meta>
        <Card.Description>
          {author.website && 
            <a href={author.website.href} target="_new">{author.website.href}</a>}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui right aligned">
          <Button icon color="blue" onClick={editClicked}>
            &#9998;
          </Button>
          <Button icon color="red" onClick={deleteClick}>
            &#x1f5d1;
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}