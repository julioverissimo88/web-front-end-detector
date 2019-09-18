import React from 'react'

export default function SuspiciousBehavior() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Suspicious Behavior</h1>
            </div>

            {/* Card Body */}
            <div className="card-body">
            Activities, Fragments, and Adapters should not
contain in their source code the implementation of event handlers. First, event
handling code, when embedded into one of these components, is implemented
through anonymous or internal classes. As the interfaces that these event handlers need to implement are often complex, the source code of Activities, Fragments, and Adapters becomes less readable. Second, an event handler often
makes use of business rules and domain models. A less attentive developer
may then write these business rules directly into the event handler (which
then leads us to a possible Brain UI Component smell). The use of anonymous
classes or internal classes to implement Listeners to respond to user events is
a sign of code smell.

        
        </div>
        </div>
        </div>
    )
}
