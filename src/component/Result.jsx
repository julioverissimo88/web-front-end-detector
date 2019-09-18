import React, { Component } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import {Row} from 'primereact/row';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default class Result extends Component {
    render() {
        return (
            <div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Results</h1>
                    <a href="/analyze" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="as fa-bug fa-sm text-white-50" /> Run new review</a>
                </div>


                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Suspicious Behavior</h1>
                </div>
                
                <DataTable value={this.props.resultSuspiciousBehavior} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Duplicate Style Attributes</h1>
                </div>
                <DataTable value={this.props.resultDuplicateStyleAttributes} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">God Style Resource</h1>
                </div>
                <DataTable value={this.props.resultGodStyleResource} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Hidden Listener</h1>
                </div>
                <DataTable value={this.props.resultHiddenListener} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Magic Resource</h1>
                </div>
                <DataTable value={this.props.resultMagicResource} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">God String Resource</h1>
                </div>
                <DataTable value={this.props.resultGodStringResource} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Inappropriate String Reuse</h1>
                </div>
                <DataTable value={this.props.resultInappropriateStringReuse} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Not Found Image</h1>
                </div>
                <DataTable value={this.props.resultNotFoundImage} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Coupled UI Component</h1>
                </div>
                <DataTable value={this.props.resultCoupledUIComponent} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Flex Adapter</h1>
                </div>
                <DataTable value={this.props.resultFlexAdapter} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Brain UI Component</h1>
                </div>
                <DataTable value={this.props.resultBrainUIComponent} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Comp UI IO</h1>
                </div>
                <DataTable value={this.props.resultCompUIIO} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Not Fragment</h1>
                </div>
                <DataTable value={this.props.resultNotFragment} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Excessive Fragment</h1>
                </div>
                <DataTable value={this.props.resultExcessiveFragment} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>

                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Fool Adapter</h1>
                </div>
                <DataTable value={this.props.resultFoolAdapter} paginator={true} rows={10} first={0}
                    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <Column className="break-text" field="arquivo" header="Arquivo" />
                    <Column field="linha" header="Line" style={{width:'100px'}} />
                    <Column field="coluna" header="Collumn" style={{width:'100px'}} />
                    <Column field="tipoSmell" header="Type" style={{width:'100px'}} />
                </DataTable>
            </div>
        )
    }
}
