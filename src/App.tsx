import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Menu } from "./components";
import Basic from "./pages/basic";
import StateDemo from "./pages/useState";
import EffectDemo from "./pages/useEffect";
import ContextDemo from "./pages/useContext";
import ReducerDemo from "./pages/useReducer";
import CallbackDemo from "./pages/useCallback";
import MemoDemo from "./pages/useMemo";
import RefDemo from "./pages/useRef";
import LayoutEffectDemo from "./pages/useLayoutEffect";
import SelfHooksDemo from "./pages/selfHooks";
import "./App.css";

export default function BasicExample() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Basic />
            </Route>
            <Route path="/state">
              <StateDemo />
            </Route>
            <Route path="/effect">
              <EffectDemo />
            </Route>
            <Route path="/context">
              <ContextDemo />
            </Route>
            <Route path="/reducer">
              <ReducerDemo />
            </Route>
            <Route path="/callback">
              <CallbackDemo />
            </Route>
            <Route path="/memo">
              <MemoDemo />
            </Route>
            <Route path="/ref">
              <RefDemo />
            </Route>
            <Route path="/layoutEffect">
              <LayoutEffectDemo />
            </Route>
            <Route path="/selfHoosk">
              <SelfHooksDemo />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}



