import React, { Component } from 'react';

import { Link } from 'react-router';
import { Header, Container } from 'semantic-ui-react';

import { socketApp } from '../store';

export default class Main extends Component {

  //Sets up client to look for sockets.
  componentWillMount() {
    const itemService = socketApp.service('items');
    itemService.on('created', (item) => this.props.createdItem(item));
    itemService.on('removed', (item) => this.props.removedItem(item));
    itemService.on('updated', (item) => this.props.updatedItem(item));
  }


  render() {
    return (
      <Container text>
        <Header as="h1" textAlign="center">
          <Link to="/">Title</Link>
        </Header>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    );
  }
}
