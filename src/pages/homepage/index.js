import React from 'react';
import Header from '../../components/header';
import Component from '../../components/component';

class Homepage extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      /* Some parametres*/
    };

  }
  componentDidMount () {

    /* Some functions*/

  }
  render () {

    return (
      <div className="main" >
        <Header />
        <div className="X_component" >
          <Component />
        </div>
      </div>
    );

  }

}


export default Homepage;