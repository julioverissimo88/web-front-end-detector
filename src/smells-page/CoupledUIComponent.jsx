import React from 'react'

export default function CoupledUIComponent() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Coupled UI Component</h1>
            </div>

            {/* Card Body */}
            <div className="card-body">
            In order to be reused, Fragments, Adapters,
and Listeners should not have a direct reference to who uses them. The existence of direct reference to Activities or Fragments in these elements is an
evidence of code smell.

        
        </div>
        </div>
        </div>
    )
}
