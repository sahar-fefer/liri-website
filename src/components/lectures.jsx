import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, useTrail, animated, config } from 'react-spring';
import { LectureBox } from './lectureBox';

export const Lectures = () => {
    const [header, setHeadre] = useState(false);
    const headrSwap = useSpring({
        opacity: header ? 1 : 0,
        config: config.molasses,
        transform: header
            ? `translate3d(0,0,0)`
            : `translate3d(-50%,0,0)`
    })

    const LecturesContent = [
        {
            header: 'רמזור',
            p: `נבחרה להיות חברת מועצה בקדנציה.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            background: 'l1'
        },
        {
            header: 'מיניות',
            p: `נבחרה להיות חברת מועצה בקדנציה.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            background: 'l1'
        },
        {
            header: 'נשים בשואה',
            p: `הקימה את תוכנית מנהיגאה.
            דחמג לדגלחל דגלן'ק לחמבל לשדחלמדגל גצלד לךגד.
            דחמג לדגלחל דגלן'ק לחמבל לשדצךגדצדח.
            דחמג לדגלחל דגלן'ק לחמבל לשדחססצת חדלי ןדגןןן ןדיגן.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            background: 'l1'
        },
        {
            header: 'מושגים בסיסיים',
            p: `עובדת בתור מנחה חברתית בתיכון בן צבי.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדמנגד חנדגח.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            background: 'l1'
        },
        {
            header: 'מגדר',
            p: `נבחרה להיות חברת מועצה בקדנציה.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            background: 'l1'
        },
        {
            header: 'תהליך ארוך טווח',
            p: `נבחרה להיות חברת מועצה בקדנציה.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            background: 'l1'
        }
    ]

    return (
        <section id={'about'}>
            <div className="container-fluid">
                <div className={'container'}>
                    <div>
                        <Waypoint
                            bottomOffset="20%"
                            topOffset='-20%'
                            onEnter={() => {
                                if (!header) setHeadre(true);
                            }}
                        />
                        <animated.h1 style={headrSwap}
                            className="component-header">
                            הרצאות
                        </animated.h1>
                    </div>
                    <p className="info">
                        הרצאות שפותחו, תוכננו והועברו במחד חדגחיג חחנג מדךחדגלדגדגלח גדחגדחידגי. 
                    </p>
                    <p className="info">
                        לגמדחד דחגגעדן ךשדיגחד חנבתזלשד ליגדיגחס שחלשןחשן, גלחלדגחלד חדגחדגיחדגידגמ מגנישישלשצד סלמשסלחדךשחדשתצגדישךדח
                    </p>
                    <p className="info">
                        גחדיגועד גחו/ חשלנס ובנבלדח דחבנדמ לחדגח לדחןשןש;לחג לדגחלדיד דחיחדינגחד חדממס.
                    </p>
                    <p className="info">
                        ללדמגךד, מגגמד גחדמגג לדדנשךשמשמבמדחד דלדחידח דחשחשיתשד משדנשד.
                    </p>
                    <div className='row'>
                        {
                            LecturesContent.map((lecture, key) =>
                                <LectureBox lecture={lecture} key={key} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
