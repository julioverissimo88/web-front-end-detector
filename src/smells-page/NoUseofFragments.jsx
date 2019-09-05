import React from 'react'

export default function NoUseofFragments() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">No Use of Fragments</h1>
            </div>

            {/* Card Body */}
            <div className="card-body">
            Fragments can decouple UI with behavior
pieces. The non-use of fragments can be a smell in visually rich apps. Such apps
have a high number of different behaviors, animations, and events to handle.
If all the implementation relies on a single Activity, for example, this class
will be highly complex and hard to understand. Moreover, visually rich apps

    
    
        </div>
        </div>
        </div>
    )
}
