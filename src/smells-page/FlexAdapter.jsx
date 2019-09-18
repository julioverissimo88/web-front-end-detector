import React from 'react'

export default function FlexAdapter() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
            <h1 className="h3 mb-2 text-gray-800">Flex Adapter</h1>
        </div>

        {/* Card Body */}
        <div className="card-body">
         Adapters should be responsible for populating a view from
a single object. The code smell emerges when Adapters contain business or
view logic. As we discussed in the Brain UI Component smell, UI logic and
business rules should remain separate from each other.



    </div>
    </div>
    </div>
    )
}
