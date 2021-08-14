import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CollectableDetails } from '../CollectableDetails';
import { CollectableList } from '../CollectableList';
import { useStyles } from './App.styles';

/**
 * App
 * Reset the global style and set up the available routes
 */
export function App() {
  useStyles();
  return (
    <Router>
      <Switch>
        <Route path="/collectable/:assetContract/:tokenId">
          <CollectableDetails />
        </Route>
        <Route path="/">
          <CollectableList />
        </Route>
      </Switch>
    </Router>
  );
}
