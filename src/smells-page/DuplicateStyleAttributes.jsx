import React from 'react'

export default function DuplicateStyleAttributes() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
            <h1 className="h3 mb-2 text-gray-800">Duplicate Style Attributes</h1>
        </div>

        {/* Card Body */}
        <div className="card-body">
        Android developers often choose to define the style of a UI element directly in the layout file. However, this might
lead to unnecessary duplication (e.g., the same complex style appears in different components). The existence of duplicated style definitions in different
components indicates this code smell.




    </div>
    </div>
    </div>
    )
}
