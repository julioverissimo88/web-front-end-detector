import React from 'react'

export default function HiddenListener() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
            <h1 className="h3 mb-2 text-gray-800">Hidden Listener</h1>
        </div>

        {/* Card Body */}
        <div className="card-body">
        Layout resources should only be responsible for presenting data. This smell appears when these resources also configure the listener
that will respond to events, such as the onClick event. Event handling in
XML files makes it harder for developers to identify which listeners are used
and where. Although the most recent versions of IDEs are able to show developers which events are declared in an XML file when reading the respective
Java file, events that are declared in XML files are “hidden” from developers
who primarily work in Java code.
    </div>
    </div>
    </div>
    )
}
