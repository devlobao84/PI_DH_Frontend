import isAuthenticated from './auth';
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute ({ children, ...rest}) {
  return (
  <Route {...rest} render={ ({location}) => (
    isAuthenticated() ? (
      children
   ) : (
     <Redirect to={{ pathname: '/login', state: { from: location}}} />
   )
  )} />
  )
};

