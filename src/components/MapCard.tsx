import { Card, Button } from 'semantic-ui-react';
import { MapCardProps } from '../types';

export function MapCard({ map, deleteMap }: MapCardProps) {
  const deleteClick = async () => {
    if (confirm(`Are you sure you want to delete '${map.title}'?`)) {
      await deleteMap(map.id);
    }
  };

  const editClicked = () => {
    alert("Edit!");
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <a href={map.link.href} target="_new">{map.title}</a>
        </Card.Header>
        <Card.Meta>{map.authorName}</Card.Meta>
        <Card.Description>
          {map.description}
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
