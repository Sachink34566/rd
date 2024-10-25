import React, { Component } from 'react';
import Navbar from './Navbar'; // Ensure this path is correct
import CreatedRule from '../components/CreatedRules'; 
import CombineRules from '../components/CombineRules'; // Import CombineRules component
import EvaluateRules from '../components/EvulateRules'; // Import EvaluateRules component
import UpdateRules from '../components/UpdateRules'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      selectedPage: 'home', // Default selected page
    };
  }

  // Method to update the selected page
  handlePageChange = (page) => {
    this.setState({ selectedPage: page });
  };

  render() {
    // Destructure selectedPage from the state
    const { selectedPage } = this.state;

    return (
      <div>
        {/* Navigation bar at the top */}
        <Navbar onPageChange={this.handlePageChange} />

        {/* Main content of the HomePage */}
        <div className="homepage-content">
          {selectedPage === 'home' && (
            <>
              <h1>Hello</h1>
              <p>Welcome to the homepage!</p>
            </>
          )}
          {selectedPage === 'createdRules' && <CreatedRule />}
          {selectedPage === 'combineRules' && <CombineRules />}
          {selectedPage === 'evaluateRules' && <EvaluateRules />}
          {selectedPage === 'UpdateRules' && <UpdateRules />}
        </div>
      </div>
    );
  }
}
