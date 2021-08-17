import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from './routes';
import { DefaultLayout} from './components/layout/DefaultLayout'
import { UserContextProvider } from '../src/context/UsersContext'

function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          {routes.map(route => {
            return (
              <Route path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            )
          })}
          <Route path="*">
              <h1>404 not found</h1>
            </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  </UserContextProvider>
  );
}

export default App;
