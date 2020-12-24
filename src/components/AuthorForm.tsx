import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthorFormProps } from '../types';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import { toUrl } from '../utils';

export function AuthorForm({ saveAuthor }: AuthorFormProps) {
  const history = useHistory();

  const [author, setAuthor] = useState({
    firstName: '',
    lastName: '',
    cohort: '',
    website: null
  });

  const submitForm = () => {
    return saveAuthor({
      id: '',
      firstName: author.firstName,
      lastName: author.lastName,
      cohort: author.cohort,
      website: toUrl(author.website),
      createdBy: 'Andy',
      updatedBy: 'Andy',
      createdDateTime: new Date(),
      updatedDateTime: new Date()
    })
    .then(() => history.push("/authors"));
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>, target: any) => {
    setAuthor({
      ...author,
      [target.id]: target.value
    });
  };

  return (
    <Form>
      <Form.Field
        id='firstName'
        control={Input}
        label='First Name'
        placeholder='First Name'
        onChange={onInputChange}
        autoFocus
      />
      <Form.Field
        id='lastName'
        control={Input}
        label='Last Name'
        placeholder='Last Name'
        onChange={onInputChange}
      />
      <Form.Field
        id='cohort'
        control={Input}
        label='Cohort '
        placeholder='Cohort '
        onChange={onInputChange}
      />
      <Form.Field
        id='website'
        control={Input}
        type='url'
        label='Website'
        placeholder='Website'
        onChange={onInputChange}
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
