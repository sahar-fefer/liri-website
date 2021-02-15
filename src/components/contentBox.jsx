import React from 'react'

export const ContentBox = ({ title, info, background }) => {
    return (
        <div className="col-6 col-md-4">
            <div className='contentBox'
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/media/${background})` }}>
                <h3 className='title'>{title}</h3>
                <h4 className='info'>{info}</h4>
                {/* <div className='title'>{title}</div>
                <div className='info'>{info}</div> */}
            </div>
        </div>
    )
}
