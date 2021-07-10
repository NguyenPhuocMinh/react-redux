import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// pages
import Header from './components/Header';
// material-ui
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
// routes
import { PublicRoutes } from './routes';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f9f9f9',
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.main}>
        <Switch>
          {PublicRoutes.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.main}
              />
            )
          })}
          {/* NOT FOUND */}
          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
