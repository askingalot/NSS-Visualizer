import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MapFormProps } from '../types';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import { toUrl } from '../utils';

export function MapForm({ saveMap, authors }: MapFormProps) {
  const history = useHistory();

  const [map, setMap] = useState({
    title: '',
    description: '',
    authorId: '',
    link: ''
  });

  const [file, setFile] = useState(undefined as (File | undefined))

  const authorOptions = authors.map(a => ({
    key: a.id,
    value: a.id,
    text: `${a.firstName} ${a.lastName}`
  }));

  const submitForm = () => {
    return saveMap({
      id: '',
      title: map.title,
      description: map.description,
      authorId: map.authorId,
      authorName: authorOptions.find(ao => ao.key === map.authorId)?.text ?? "unknown",
      link: toUrl(map.link),
      createdBy: 'Andy',
      updatedBy: 'Andy',
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      file: file
    })
      .then(() => history.push("/"));
  };

  const onInputChange = (_: ChangeEvent<HTMLInputElement>, target: { id: string, value: string }) => {
    setMap({
      ...map,
      [target.id]: target.value
    });
  };

  const onFileInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFile(evt.target.files?.item(0) ?? undefined);
  };

  return (
    <Form>
      <Form.Field
        id='title'
        control={Input}
        label='Title'
        placeholder='Title'
        onChange={onInputChange}
        autoFocus
      />
      <Form.Field
        id='description'
        control={TextArea}
        label='Description'
        placeholder='Description'
        onChange={onInputChange}
      />
      <Form.Field
        id="authorId"
        control={Select}
        options={authorOptions}
        label={{ children: 'Author', htmlFor: 'author' }}
        placeholder='Author'
        search
        searchInput={{ id: 'author' }}
        onChange={onInputChange}
      />
      <Form.Field
        id='link'
        control={Input}
        type='url'
        label='Link'
        placeholder='Link'
        onChange={onInputChange}
      />
      <Form.Field
        id='file'
        control={Input}
        type='file'
        label='File'
        placeholder='File'
        onChange={onFileInputChange}
      />
      <Form.Field
        id='save'
        control={Button}
        content='Save'
        onClick={submitForm}
      />
    </Form>
  );
}
