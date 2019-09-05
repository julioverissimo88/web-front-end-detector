import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AnalisysApp from './component/AnalisysApp';
import MagicResource from './smells-page/MagicResource';
import DeepNestedLayout from './smells-page/DeepNestedLayout';
import MissingImage from './smells-page/MissingImage';
import CoupledUIComponent from './smells-page/CoupledUIComponent';
import SuspiciousBehavior from './smells-page/SuspiciousBehavior';
import LongorRepeatedLayout from './smells-page/LongorRepeatedLayout';
import FoolAdapter from './smells-page/FoolAdapter';
import ExcessiveUseofFragments from './smells-page/ExcessiveUseofFragments';
import UIComponentDoingIO from './smells-page/UIComponentDoingIO';
import NoUseofFragments from './smells-page/NoUseofFragments';
import GodStyleResource from './smells-page/GodStyleResource';
import GodStringResource from './smells-page/GodStringResource';
import DuplicateStyleAttributes from './smells-page/DuplicateStyleAttributes';
import FlexAdapter from './smells-page/FlexAdapter';
import InappropriateStringReuse from './smells-page/InappropriateStringReuse';
import HiddenListener from './smells-page/HiddenListener';
import BrainUIComponent from './smells-page/BrainUIComponent';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App>
                <Route path="/analyze" component={AnalisysApp} />

                <Route path="/MagicResource" component={MagicResource} />
                <Route path="/DeepNestedLayout" component={DeepNestedLayout} />
                <Route path="/MissingImage" component={MissingImage} />
                <Route path="/CoupledUIComponent" component={CoupledUIComponent} />
                <Route path="/SuspiciousBehavior" component={SuspiciousBehavior} />
                <Route path="/LongorRepeatedLayout" component={LongorRepeatedLayout} />
                <Route path="/FoolAdapter" component={FoolAdapter} />
                <Route path="/ExcessiveUseofFragments" component={ExcessiveUseofFragments} />
                <Route path="/UIComponentDoingIO" component={UIComponentDoingIO} />
                <Route path="/NoUseofFragments" component={NoUseofFragments} />
                <Route path="/GodStyleResource" component={GodStyleResource} />
                <Route path="/GodStringResource" component={GodStringResource} />
                <Route path="/DuplicateStyleAttributes:" component={DuplicateStyleAttributes} />
                <Route path="/FlexAdapter" component={FlexAdapter} />
                <Route path="/InappropriateStringReuse" component={InappropriateStringReuse} />
                <Route path="/HiddenListener" component={HiddenListener} />
                <Route path="/BrainUIComponent" component={BrainUIComponent} />
            </App>
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
