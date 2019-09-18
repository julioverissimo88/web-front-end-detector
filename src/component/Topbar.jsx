import React, { Component } from 'react'
// import TopbarSearch from './TopbarSearch';
// import TopBarMenu from './TopBarMenu';

export default class Topbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                {/* <TopbarSearch /> */}
                
                {/* Topbar Navbar */}
                {/* <TopBarMenu /> */}
            </nav>
        )
    }
}
