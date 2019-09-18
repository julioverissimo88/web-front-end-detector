import React, { Component } from 'react';
import Dropzone from './DropZone';


export default class UploadZip extends Component {
    render() {
        return (
            <div className="col-xl-6 col-lg-5">
                <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Upload File</h6>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <div className="chart-pie pt-4">
                            <div className="chartjs-size-monitor">
                                <Dropzone />
                            </div>
                            <canvas id="myPieChart" width={408} height={253} className="chartjs-render-monitor" style={{ display: 'block', width: 408, height: 253 }} />
                        </div>
                        <hr />
                        <button onClick={() => { this.props.submitGithub() }} className="btn btn-success btn-icon-split">
                            <span className="icon text-white-50" id="btn-run">
                                <i className="fas fa-check" />
                            </span>
                            <span className="text" >Run</span>
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}
