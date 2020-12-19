import {ChangeEvent, useState} from 'react';
import {Map} from '../types';
import {Form, Input, TextArea, Button, Select} from 'semantic-ui-react';
import {toUrl} from '../utils';

export function MapForm({saveMap}: {saveMap: (m: Map) => void}) {
  const [map, setMap] = useState({
    title: '',
    description: '',
    author: '',
    link: ''
  });

  const authorOptions = [
    {
      key: 'YL3Zdw3JJpMu25MyFTqd',
      value: 'YL3Zdw3JJpMu25MyFTqd',
      text: 'Test Testerson'
    },
    {
      key: 'n589SNwnSjIcaOnjimyH',
      value: 'n589SNwnSjIcaOnjimyH',
      text: 'Bob Testerson'
    }
  ];

  const submitForm = () => {
    saveMap({
      id: '',
      title: map.title,
      description: map.description,
      author: map.author,
      link: toUrl(map.link),
      createdBy: 'Andy',
      updatedBy: 'Andy',
      createdDateTime: new Date(),
      updatedDateTime: new Date()
    });
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMap({
      ...map,
      [evt.target.id]: evt.target.value
    });
  };

  return (
    <Form>
      <Form.Field
        id='title'
        control={Input}
        label='Title'
        placeholder='Title'
        onChange={onInputChange}
      />
      <Form.Field
        id='description'
        control={TextArea}
        label='Description'
        placeholder='Description'
        onChange={onInputChange}
      />
      <Form.Field
        control={Select}
        options={authorOptions}
        label={{children: 'Author', htmlFor: 'author'}}
        placeholder='Author'
        search
        searchInput={{id: 'author'}}
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
        id='save'
        control={Button}
        content='Save'
        onClick={() => submitForm()}
      />
    </Form>
  );
}
