import React, { Component } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default class MenuLeft extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Detector</div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                {/* <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></a>
                </li> */}
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <Link to="/analyze" className=" nav-item nav-link">
                        <i className="fas fa-bug" />
                        <span>Run Detector</span>
                    </Link>
                </li>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fab fa-android" />
                        <span>Android Smells</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">XML:</h6>
                            <Link className="collapse-item" to="/DeepNestedLayout">Deep Nested Layout</Link>
                            <Link className="collapse-item" to="/HiddenListener">Hidden Listener</Link>
                            <Link className="collapse-item" to="/InappropriateStringReuse">Inappropriate String Reuse</Link>
                            <Link className="collapse-item" to="/FlexAdapter">Flex Adapter</Link>
                            <Link className="collapse-item" to="/NoUseofFragments">No Use of Fragments</Link>
                            <Link className="collapse-item" to="/MissingImage">Missing Image</Link>
                            <Link className="collapse-item" to="/DuplicateStyleAttributes">Duplicate Style Attributes</Link>
                            <Link className="collapse-item" to="/MagicResource">Magic Resource</Link>
                            <Link className="collapse-item" to="/GodStyleResource">God Style Resource</Link>
                            <Link className="collapse-item" to="/GodStringResource">God String Resource</Link>
                        </div>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Java:</h6>
                            <Link className="collapse-item" to="/CoupledUIComponent">Coupled UI Component</Link>
                            <Link className="collapse-item" to="/BrainUIComponent">Brain UI Component</Link>
                            <Link className="collapse-item" to="/ExcessiveUseofFragments">Excessive Use of Fragments</Link>
                            <Link className="collapse-item" to="/SuspiciousBehavior">Suspicious Behavior</Link>
                            <Link className="collapse-item" to="/UIComponentDoingIO">UI Component Doing IO</Link>
                            <Link className="collapse-item" to="/FoolAdapter">Fool Adapter</Link>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}
