import React, { Component } from 'react';
import Navbar from '../components/Navbar';

type BusinessPageState = {
  hasBusiness: boolean; // need to get this value from server
};

export class BusinessPage extends Component<unknown, BusinessPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasBusiness: false };
  }

  setHasBusiness = (value: boolean) => {
    this.setState({ hasBusiness: value });
  };

  render () {
    return (
      <div>
        <Navbar />
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default BusinessPage

{/* <div>
        {this.state.hasBusiness ? (
            <h1>This page will display your business information because you have a business!</h1>
          ) : (
            <div>
              <h1>BusinessPage</h1>
              <Link to="/pages/AddBusinessPage" className={'nav-button'}>
                <button>Add my business</button>
              </Link>
            </div>
          )}
        
      </div> */}