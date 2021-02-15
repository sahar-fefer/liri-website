import React from 'react'
import { ContentBox } from './contentBox'

export const Contents = () => {
    const content = {
        1: {
            title: 'רמזור',
            info: 'הרצאה בנושא בלה לבה',
            background: 'home_background.jpg'
        },
        2: {
            title: 'רמזור',
            info: 'הרצאה בנושא בלה לבה',
            background: 'home_background.jpg'
        },
        3: {
            title: 'רמזור',
            info: 'הרצאה בנושא בלה לבה',
            background: 'home_background.jpg'
        },
        4: {
            title: 'רמזור',
            info: 'הרצאה בנושא בלה לבה',
            background: 'home_background.jpg'
        },
        5: {
            title: 'רמזור',
            info: 'הרצאה בנושא בלה לבה',
            background: 'home_background.jpg'
        },
        6: {
            title: 'רמזור',
            info: 'הרצאה בנושא בלה לבה',
            background: 'home_background.jpg'
        }
    }

    return (
        <div id='contents' className='container-fluid'>
            <h1>התכנים שלי</h1>
            <h3>עולם התוכן אותו אני מביאה הוא רחב ומעמיק בנושאים כמו חינוך, מגדר, מינויות, הבניות חברתיות ועוד. </h3>
            <div className='boxes-container row'>
                <ContentBox title={content[1]['title']} info={content[1]['info']} background={content[1]['background']} />
                <ContentBox title={content[2]['title']} info={content[2]['info']} background={content[2]['background']} />
                <ContentBox title={content[3]['title']} info={content[3]['info']} background={content[3]['background']} />
                <ContentBox title={content[4]['title']} info={content[4]['info']} background={content[4]['background']} />
                <ContentBox title={content[5]['title']} info={content[5]['info']} background={content[5]['background']} />
                <ContentBox title={content[6]['title']} info={content[6]['info']} background={content[6]['background']} />
            </div>
        </div>
    )
}
