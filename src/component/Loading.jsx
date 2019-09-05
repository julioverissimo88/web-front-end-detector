import React from 'react'
import loading from './ajax-loader.gif';

export default function Loading() {
    return (
        <div className="loader-info">
            <img src={loading} />
        </div>
    )
}
