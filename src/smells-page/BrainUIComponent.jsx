import React from 'react'

export default function BrainUIComponent() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                    <h1 className="h3 mb-2 text-gray-800">Brain UI Component</h1>
                </div>

                {/* Card Body */}
                <div className="card-body">
                    Activities, Fragments, and Adapters should be
        responsible for presenting, interacting, and updating the UI only. Business
        logic should be implemented elsewhere. This idea is similar to what Evans [57]
        calls the separation of the “UI layer” and the “domain layer.” The existence in presentation layer elements of code related to business logic, I/O operations,
    conversion of data, or static fields is a sign of code smell.

                </div>
            </div>
        </div>
    )
}
