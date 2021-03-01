import React from 'react'
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h1>This page is full of secrets</h1>
      </div>
    )
  }

  return <Redirect to="/login" />;
};

export default SecretPage;
