'use client'

import React, { Component } from 'react';
import Navbar from '../components/Navbar';

type HomepageState = {
  listOfSellers: string | null;
};

// interface Props {
//   className?: string;
// }

export class Homepage extends Component<unknown, HomepageState> {
  constructor(props: unknown) {
    super(props);
    this.state = { listOfSellers: null };
  }

  render () {
    return (
      <div>
        <Navbar />
        <h1>Homepage</h1>
      </div>
      
    );
  }
};

export default Homepage