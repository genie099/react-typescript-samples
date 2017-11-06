import * as React from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage, MemberPageContainer } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
          <Route path="/member" component={MemberPageContainer} />
        </Switch>
      </div>
    </HashRouter>
  );
}
