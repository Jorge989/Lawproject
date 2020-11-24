import React from 'react';
import {RouteProps as ReactDOMRouteProps,
    Redirect,
     Route as ReactDOMRoute
    } from 'react-router-dom';
import {useAuth} from './hooks/auth'

 
interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
component: React.ComponentType;
}


const Route: React.FC<RouteProps>  =({ 
    isPrivate = false,
     component: Component,
      ...rest
    }) => {

const {user} = useAuth();
console.log(user);
return(

    <ReactDOMRoute 
    {...rest}
    render={()=>{
return isPrivate == !!user ? (
<Component/>
) : (
    <Redirect  to={{pathname: isPrivate? '/' : '/home'}}/>
)
    }}
    
    />
)
};
export default Route;