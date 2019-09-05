import React from 'react'

export default function UIComponentDoingIO() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">UI Component Doing I/O</h1>
            </div>

            {/* Card Body */}
            <div className="card-body">
            Activities, Fragments, and Adapters performing I/O operations, such as database and file access, cause this smell.
        </div>
        </div>
        </div>
    )
}
