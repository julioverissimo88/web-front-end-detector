import React from 'react'

export default function DeepNestedLayout() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Deep Nested Layout</h1>
            </div>

            {/* Card Body */}
            <div className="card-body">
                Deep nesting when constructing layout resources
    was considered a code smell. Interestingly, the official Android website has
    more information and provides automated tools to deal with this problem

        </div>
        </div>
        </div>
    )
}
