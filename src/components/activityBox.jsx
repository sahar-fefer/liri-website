import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Waypoint } from 'react-waypoint';
import { useSpring, useTrail, animated, config } from 'react-spring';

export const ActivityBox = ({ content }) => {
    return (
        <section id={'activity-box'}>
            <div className="container-fluid">
                <div className={`${content.dir === 'l-r' && 'flex-row-reverse'} row content-wrapper`}>
                    <div className="col">
                        <div className="row">
                            <img src={`/media/doing/${content.logo.src}.png`} alt={content.logo.alt} className="activity-logo col-auto" />
                            {
                                content.logo2 &&
                                <img src={`/media/doing/${content.logo2.src}.png`} alt={content.logo2.alt} className="activity-logo col-auto" />
                            }
                            <h2 className="header col">{content.header}</h2>
                        </div>
                        <p className="content">{content.p}</p>
                    </div>
                    <div className="col">
                        {
                            content.graphicType === 'img'
                                ? <img src="" alt="" />
                                : <div className='player-wrapper'>
                                    <ReactPlayer
                                        controls
                                        className='react-player'
                                        url={content.graphic.url}
                                        width='100%'
                                        // height='100%'
                                    />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
