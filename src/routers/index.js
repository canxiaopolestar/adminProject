import App from "@/views/App";
import Login from "@/views/login";
import MainContent from "@/views/mainContent";
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import homeRouter from "./homeRouter";
import personalRouter from "./personalRouter";
import userManageRouter from "./userManageRouter";

const routers = [homeRouter, userManageRouter, personalRouter];

const renderRoutes = (routers) => {
  return routers.map((item, index) => {
    if (item.children) {
      let Com = item.component;
      return <Com key={index}>{renderRoutes(item.children)}</Com>;
    } else {
      return (
        <Route
          path={item.path}
          component={item.component}
          exact={item.exact}
          key={index}
        />
      );
    }
  });
};
/*<Route path={item.path} component={item.component} exact={item.exact} key={index}>{item.children && renderRoutes(item.children)}</Route>)*/

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          {/*<Route path='/' render={()=>*/}
          {/*  <App>*/}
          {/*    <MainContent>*/}
          {/*      {renderRoutes(routers)}*/}
          {/*    </MainContent>*/}
          {/*  </App>*/}
          {/*}>*/}
          {/*</Route>*/}
          <App>
            <MainContent>{renderRoutes(routers)}</MainContent>
          </App>
        </Switch>
      </HashRouter>
    );
  }
}
