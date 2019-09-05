import React from 'react'

export default function MissingImage() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Missing Image</h1>
            </div>

            {/* Card Body */}
            <div className="card-body">
            This code smell happens when the system has only a single
version of .png, .jpg, or .gif images. The Android platform encourages images
to be available in more than one size or resolution to perform optimizations.

    
    
        </div>
        </div>
        </div>
    )
}
