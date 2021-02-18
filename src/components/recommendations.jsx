import React from 'react'
import { Recommend } from './recommend'

export const Recommendations = () => {
    return (
        <div id='recommendations' className='container'>
            <div className="row">
                <Recommend />
                <Recommend />
                <Recommend />
                <Recommend />
            </div>
        </div>
    )
}
