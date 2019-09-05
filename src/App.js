import React from 'react';
import './App.css';
import './vendor/fontawesome-free/css/all.min.css';
import './sb-admin-2.min.css';
import $ from 'jquery';
import Footer from './component/Footer';
import Topbar from './component/Topbar';
import MenuLeft from './component/MenuLeft';
import Modal from './component/Modal';
window.jQuery = window.$ = $;
require('bootstrap')

function App(props) {
  return (
    <div>


      {/* Page Wrapper */}
      <div id="wrapper">

        {/* Sidebar */}
        <MenuLeft />
        {/* End of Sidebar */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Topbar />
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
              <div className="row">
                <main>{props.children}</main>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}

          {/* Footer */}
          <Footer />
          {/* End of Footer */}

        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>


      {/* Logout Modal*/}
      <Modal />
    </div>
  );
}

export default App;
