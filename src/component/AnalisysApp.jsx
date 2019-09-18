import React, { Component } from 'react'
import Axios from 'axios';
import { APIURL, APICORSCONFIG } from '../constants/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import Result from './Result';
import $ from 'jquery';
// import UploadZip from './UploadZip';



export default class AnalisysApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            done: false,
            DeepNestedLayout: false,
            DuplicateStyleAttributes: false,
            GodStyleResource: false,
            HiddenListener: false,
            MagicResource: false,
            GodStringResource: false,
            InappropriateStringReuse: false,
            NotFoundImage: false,
            CoupledUIComponent: false,
            SuspiciousBehavior: false,
            FlexAdapter: false,
            BrainUIComponent: false,
            CompUIIO: false,
            NotFragment: false,
            ExcessiveFragment: false,
            FoolAdapter: false,
            repository: '',
            pristine: true
        }
    }


    onCheckAllSmells = () => {
        this.setState({
            DeepNestedLayout: true,
            DuplicateStyleAttributes: true,
            GodStyleResource: true,
            HiddenListener: true,
            MagicResource: true,
            GodStringResource: true,
            InappropriateStringReuse: true,
            NotFoundImage: true,
            CoupledUIComponent: true,
            SuspiciousBehavior: true,
            FlexAdapter: true,
            BrainUIComponent: true,
            CompUIIO: true,
            NotFragment: true,
            ExcessiveFragment: true,
            FoolAdapter: true,
        });
    }

    onUnCheckAllSmells = () => {
        this.setState({
            DeepNestedLayout: false,
            DuplicateStyleAttributes: false,
            GodStyleResource: false,
            HiddenListener: false,
            MagicResource: false,
            GodStringResource: false,
            InappropriateStringReuse: false,
            NotFoundImage: false,
            CoupledUIComponent: false,
            SuspiciousBehavior: false,
            FlexAdapter: false,
            BrainUIComponent: false,
            CompUIIO: false,
            NotFragment: false,
            ExcessiveFragment: false,
            FoolAdapter: false,
        });
    }

    repositoryOnchange = (value) => {
        this.setState({ repository: value.target.value, pristine: this.state.repository.length > 0 ? false : true })
    }



    async submitGithub() {
        try {
            if (this.state.repository) {
                let DeepNestedLayout = null;
                this.setState({ loading: true });
                if (this.state.DeepNestedLayout) {
                    let request = await Axios.post(`${APIURL}/DeepNestedLayout?repository=${this.state.repository}`, APICORSCONFIG)
                    DeepNestedLayout = request.data;
                }

                let DuplicateStyleAttributes = null;
                if (this.state.DuplicateStyleAttributes) {
                    let request = await Axios.post(`${APIURL}/DuplicateStyleAttributes?repository=${this.state.repository}`, APICORSCONFIG)
                    DuplicateStyleAttributes = request.data;
                }

                let GodStyleResource = null;
                if (this.state.GodStyleResource) {
                    let request = await Axios.post(`${APIURL}/GodStyleResource?repository=${this.state.repository}`, APICORSCONFIG)
                    GodStyleResource = request.data;
                }

                let HiddenListener = null;
                if (this.state.HiddenListener) {
                    let request = await Axios.post(`${APIURL}/HiddenListener?repository=${this.state.repository}`, APICORSCONFIG)
                    HiddenListener = request.data;
                }

                let MagicResource = null;
                if (this.state.MagicResource) {
                    let request = await Axios.post(`${APIURL}/magicResource?repository=${this.state.repository}`, APICORSCONFIG)
                    MagicResource = request.data;
                }

                let GodStringResource = null;
                if (this.state.GodStringResource) {
                    let request = await Axios.post(`${APIURL}/godStringResource?repository=${this.state.repository}`, APICORSCONFIG)
                    GodStringResource = request.data;
                }

                let InappropriateStringReuse = null;
                if (this.state.InappropriateStringReuse) {
                    let request = await Axios.post(`${APIURL}/inappropriateStringReuse?repository=${this.state.repository}`, APICORSCONFIG)
                    InappropriateStringReuse = request.data;
                }

                let NotFoundImage = null;
                if (this.state.NotFoundImage) {
                    let request = await Axios.post(`${APIURL}/NotFoundImage?repository=${this.state.repository}`, APICORSCONFIG)
                    NotFoundImage = request.data;
                }

                let CoupledUIComponent = null;
                if (this.state.CoupledUIComponent) {
                    let request = await Axios.post(`${APIURL}/CoupledUIComponent?repository=${this.state.repository}`, APICORSCONFIG)
                    CoupledUIComponent = request.data;
                }

                let SuspiciousBehavior = null;
                if (this.state.SuspiciousBehavior) {
                    let request = await Axios.post(`${APIURL}/SuspiciousBehavior?repository=${this.state.repository}`, APICORSCONFIG)
                    SuspiciousBehavior = request.data;
                }

                let FlexAdapter = null;
                if (this.state.FlexAdapter) {
                    let request = await Axios.post(`${APIURL}/FlexAdapter?repository=${this.state.repository}`, APICORSCONFIG)
                    FlexAdapter = request.data;
                }

                let BrainUIComponent = null;
                if (this.state.BrainUIComponent) {
                    let request = await Axios.post(`${APIURL}/BrainUIComponent?repository=${this.state.repository}`, APICORSCONFIG)
                    BrainUIComponent = request.data;
                }

                let CompUIIO = null;
                if (this.state.CompUIIO) {
                    let request = await Axios.post(`${APIURL}/CompUIIO?repository=${this.state.repository}`, APICORSCONFIG)
                    CompUIIO = request.data;
                }

                let NotFragment = null;
                if (this.state.NotFragment) {
                    let request = await Axios.post(`${APIURL}/NotFragment?repository=${this.state.repository}`, APICORSCONFIG)
                    NotFragment = request.data;
                }

                let ExcessiveFragment = null;
                if (this.state.ExcessiveFragment) {
                    let request = await Axios.post(`${APIURL}/ExcessiveFragment?repository=${this.state.repository}`, APICORSCONFIG)
                    ExcessiveFragment = request.data;
                }

                let FoolAdapter = null;
                if (this.state.FoolAdapter) {
                    let request = await Axios.post(`${APIURL}/FoolAdapter?repository=${this.state.repository}`, APICORSCONFIG)
                    FoolAdapter = request.data;
                }

                this.setState({
                    done: true,
                    loading: false,
                    resultDeepNestedLayout: DeepNestedLayout,
                    resultDuplicateStyleAttributes: DuplicateStyleAttributes,
                    resultGodStyleResource: GodStyleResource,
                    resultHiddenListener: HiddenListener,
                    resultMagicResource: MagicResource,
                    resultGodStringResource: GodStringResource,
                    resultInappropriateStringReuse: InappropriateStringReuse,
                    resultNotFoundImage: NotFoundImage,
                    resultCoupledUIComponent: CoupledUIComponent,
                    resultSuspiciousBehavior: SuspiciousBehavior,
                    resultFlexAdapter: FlexAdapter,
                    resultBrainUIComponent: BrainUIComponent,
                    resultCompUIIO: CompUIIO,
                    resultNotFragment: NotFragment,
                    resultExcessiveFragment: ExcessiveFragment,
                    resultFoolAdapter: FoolAdapter,
                });

                $("#btn-run").removeClass("spinner-border spinner-border-sm");
                toast.success("Analysis completed!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            else {
                toast.warning("Enter project git or Zip File!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
        catch (error) {
            toast.warning("Failed to run analisys. :(", {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error.message)
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <ToastContainer />
                {
                    this.state.loading &&
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        className="loaderInfo"
                    />
                }


                {
                    this.state.done
                        ?
                        <Result {...this.state} />
                        :
                        <>
                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-2 text-gray-800">Analyze</h1>
                            </div>


                            <div className="row">
                                <div className="col-xl-12 col-lg-5">
                                    <div className="card shadow mb-4">
                                        {/* Card Header - Dropdown */}
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Android Smells</h6>
                                        </div>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="chart-pie pt-4">
                                                <div className="chartjs-size-monitor">
                                                    <div className="chartjs-size-monitor-expand">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.DeepNestedLayout} value="DeepNestedLayout" onChange={() => { this.setState({ DeepNestedLayout: true }) }} />Deep Nested Layout</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.DuplicateStyleAttributes} value="DuplicateStyleAttributes" onChange={() => { this.setState({ DuplicateStyleAttributes: true }) }} />Duplicate Style Attributes</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.GodStyleResource} value="GodStyleResource" onChange={() => { this.setState({ GodStyleResource: true }) }} />God Style Resource</label>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.HiddenListener} value="HiddenListener" onChange={() => { this.setState({ HiddenListener: true }) }} />Hidden Listener</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.MagicResource} value="MagicResource" onChange={() => { this.setState({ MagicResource: true }) }} />Magic Resource</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.GodStringResource} value="GodStringResource" onChange={() => { this.setState({ GodStringResource: true }) }} />God String Resource</label>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.InappropriateStringReuse} value="InappropriateStringReuse" onChange={() => { this.setState({ InappropriateStringReuse: true }) }} />Inappropriate String Reuse</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.CoupledUIComponent} value="CoupledUIComponent" onChange={() => { this.setState({ CoupledUIComponent: true }) }} />Coupled UI Component</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.SuspiciousBehavior} value="SuspiciousBehavior" onChange={() => { this.setState({ SuspiciousBehavior: true }) }} />Suspicious Behavior</label>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.FlexAdapter} value="FlexAdapter" onChange={() => { this.setState({ FlexAdapter: true }) }} />Flex Adapter</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.BrainUIComponent} value="BrainUIComponent" onChange={() => { this.setState({ BrainUIComponent: true }) }} />Brain UI Component</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.CompUIIO} value="CompUIIO" onChange={() => { this.setState({ CompUIIO: true }) }} />Comp UI IO</label>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.NotFragment} value="NotFragment" onChange={() => { this.setState({ NotFragment: true }) }} />Not Fragment</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.ExcessiveFragment} value="ExcessiveFragment" onChange={() => { this.setState({ ExcessiveFragment: true }) }} />Excessive Fragment</label>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.FoolAdapter} value="FoolAdapter" onChange={() => { this.setState({ FoolAdapter: true }) }} />Fool Adapter</label>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm">
                                                                    <label ><input type="checkbox" checked={this.state.NotFoundImage} value="NotFragment" onChange={() => { this.setState({ NotFoundImage: true }) }} />Not Found Image</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <button style={{ marginLeft: '10px' }} onClick={() => this.onCheckAllSmells()} className="btn btn-success btn-icon-split">
                                                <span className="icon text-white-50">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <span className="text">Check All</span>
                                            </button>

                                            <button onClick={() => this.onUnCheckAllSmells()} className="btn btn-danger btn-icon-split ">
                                                <span className="icon text-white-50">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <span className="text">Uncheck All</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <UploadZip submitGithub={this.submitGithub} /> */}

                                <div className="col-xl-12 col-lg-5">
                                    <div className="card shadow mb-4">
                                        {/* Card Header - Dropdown */}
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Github</h6>
                                        </div>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="chart-pie pt-4">
                                                <div className="chartjs-size-monitor">
                                                    <input type="text" className="form-control" onChange={(value) => { this.repositoryOnchange(value) }} value={this.state.repository} placeholder="Github Project URL" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>
                                                <canvas id="myPieChart" width={408} height={253} className="chartjs-render-monitor" style={{ display: 'block', width: 408, height: 253 }} />
                                            </div>
                                            <hr />
                                            <button onClick={() => { this.submitGithub() }} className="btn btn-success btn-icon-split">
                                                <span className="icon text-white-50" id="btn-run">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <span className="text" >Run</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                }
            </div>
        )
    }
}
