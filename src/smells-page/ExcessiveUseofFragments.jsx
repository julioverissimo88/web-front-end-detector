import React from 'react'

export default function ExcessiveUseofFragments() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Excessive Use of Fragments</h1>
            </div>

            {/* Card Body */}
            <div className="card-body">
            This smell emerges when Fragments are
used without an explicit need. Examples include applications that do not need
to support tablets and when Fragments are used in only a single screen of the
app.

    
    
        </div>
        </div>
        </div>
    )
}
