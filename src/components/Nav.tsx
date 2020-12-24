import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export function Nav() {
  return (
    <Menu fixed="top">
      <Menu.Item name="Maps" as={Link} to="/" />
      <Menu.Item name="New Map" as={Link} to="/maps/add" />
      <Menu.Item name="Authors" as={Link} to="/authors" />
      <Menu.Item name="New Author" as={Link} to="/authors/add" />
    </Menu>
  )
}