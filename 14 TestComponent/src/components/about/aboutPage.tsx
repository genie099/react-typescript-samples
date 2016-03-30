import * as React from 'react';
import header from '../common/header';
import {Link} from 'react-router';

interface Props {
}

export default class About extends React.Component<Props, {}> {
   public render() {
       return (
          <div className="row">
            <h2>About Page</h2>
            <Link to="/members">Members</Link>
          </div>
       );
  }
}
