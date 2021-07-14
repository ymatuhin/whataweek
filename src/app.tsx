import { Route, Switch } from "wouter-preact";
import { HeadProvider } from "react-head";
import { ErrorBoundary, lazy } from "preact-iso";
import "./index.css";

type Props = {
  headTags?: any[];
};

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/404"));

export function App({ headTags }: Props) {
  return (
    <HeadProvider headTags={headTags}>
      <ErrorBoundary>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ErrorBoundary>
    </HeadProvider>
  );
}
