import React from 'react'

export const Recommend = ({ rec, setActiveRec, activeRec }) => {
    console.log('rec.i', rec.i);
    console.log('activeRec', activeRec);
    return (
        // <div className='col'>
            <div className={`recommend col
            ${rec.i === activeRec && 'activeRecommend'} 
            ${rec.i + 1 === activeRec && 'nearActiveRecommend'} 
            ${rec.i - 1 === activeRec && 'nearActiveRecommend'}`}
            onClick={setActiveRec(rec.i)}>
                <div className="square">
                    <p>{rec.recomend}</p>
                </div>
                <div className="recommender">
                    <p>{rec.name}</p>
                    <p>{rec.organization}</p>
                </div>
            </div>
        // </div>
    )
}
