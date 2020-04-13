import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home/index.tsx';
import CaseList from './pages/CaseList/index.tsx';
import CaseDetail from './pages/CaseDetail/index.tsx';
import { NavBar, Icon, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './App.less';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    return (
        <Router>
            <div>
                <NavBar
                    mode="light"
                    leftContent="虎鲸追踪"
                    rightContent={[
                        <Icon key="0" type="ellipsis"/>,
                    ]}
                />
                <ul className="app-tabs">
                    <li className="app-tab-pane">
                        <Link to="/">首页</Link>
                    </li>
                    <li className="app-tab-pane">
                        <Link to="/list">案件追踪</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/list">
                        <CaseList />
                    </Route>
                    <Route path="/case">
                        <CaseDetail />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

