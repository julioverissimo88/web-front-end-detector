import React from 'react'

export default function InappropriateStringReuse() {
    return (
        <div className="col-xl-12 col-lg-5">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                {/* Page Heading */}
                <div className="card-header py-3">
                    <h1 className="h3 mb-2 text-gray-800">Inappropriate String Reuse</h1>
                </div>

                {/* Card Body */}
                <div className="card-body">
                    Developers reuse strings among the different UIs of the application. For example, the string “Name” might appear in
            many parts of the app; thus, developers write this string only once in a string
            resource file and reuse it whenever they need it. However, the smell happens
            when developers reuse the same string in different parts of the system because
            the string is coincidentally the same, and not because they represent the same
            concept in the UI. For example, in one part of the app, “name” might refer to
            the name of the user, whereas in another part of the app, “name” might refer
            to the name of the user’s favorite band. Reusing strings simply because of their
            similarity might lead to two problems: First, if developers decide to change the
            string, they need to be aware that the changes will be reflected throughout
            the entire application. Second, when adding support for multiple languages,
            one language might need two words to express what another language can
            communicate in one.
    </div>
            </div>
        </div>
    )
}
