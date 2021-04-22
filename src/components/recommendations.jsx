import React, { useState, useEffect } from 'react'
import { Recommend } from './recommend'

export const Recommendations = () => {
    const [activeRec, setActiveRec] = useState(3);
    // useEffect(() => {
        
    // }, [activeRec])

    const onSetActiveRec = (i) => {
        setActiveRec(i)
    }

    const recommendationsInfo = [
        {
            recomend: 'לירי הייתה אצלנו, היא הייתה נפלאה, מרתקת מקצועית ונעימה.',
            name: 'ריטה לוי',
            organization: 'כלל שירותי בריאות',
            i: 1
        },
        {
            recomend: 'לירי הייתה אצלנו, היא הייתה נפלאה, מרתקת מקצועית ונעימה.',
            name: 'ריטה לוי',
            organization: 'כלל שירותי בריאות',
            i: 2
        },
        {
            recomend: 'לירי הייתה אצלנו, היא הייתה נפלאה, מרתקת מקצועית ונעימה.',
            name: 'ריטה לוי',
            organization: 'כלל שירותי בריאות',
            i: 3
        },
        {
            recomend: 'לירי הייתה אצלנו, היא הייתה נפלאה, מרתקת מקצועית ונעימה.',
            name: 'ריטה לוי',
            organization: 'כלל שירותי בריאות',
            i: 4
        },
        {
            recomend: 'לירי הייתה אצלנו, היא הייתה נפלאה, מרתקת מקצועית ונעימה.',
            name: 'ריטה לוי',
            organization: 'כלל שירותי בריאות',
            i: 5
        },
        {
            recomend: 'לירי הייתה אצלנו, היא הייתה נפלאה, מרתקת מקצועית ונעימה.',
            name: 'ריטה לוי',
            organization: 'כלל שירותי בריאות',
            i: 6
        },
    ]



    return (
        <div id='recommendations' className='container'>
            <h3 className="title">לקוחות מספרים</h3>
            <div className="row">
                {
                    recommendationsInfo.map((rec, key) =>
                        <Recommend
                            rec={rec}
                            setActiveRec={setActiveRec}
                            activeRec={activeRec}
                            key={key} />
                    )
                }
            </div>
            <div className='wrapperLines row'>
                {
                    recommendationsInfo.map((rec, key) =>
                        <div className={`${rec.i === activeRec && 'activeLine'} line`}
                            onClick={() => onSetActiveRec(rec.i)}
                            key={key} />
                    )
                }
            </div>
        </div >
    )
}
