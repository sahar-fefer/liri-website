import React from 'react'

export const LectureBox = ({ lecture }) => {
    return (
        <section id={'lecture-box'} className='col-6 col-md-4'>
            <div className="box"
            //  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/media/${lecture.background}.jpg)`}}
            >
                <h2 className="header col">{lecture.header}</h2>
                <p className="content">{lecture.p}</p>
            </div>
        </section >
    )
}
