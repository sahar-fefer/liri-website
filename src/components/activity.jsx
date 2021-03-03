import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, useTrail, animated, config } from 'react-spring';
import { ActivityBox } from './activityBox';

export const Activity = () => {
    const [header, setHeadre] = useState(false);
    const headrSwap = useSpring({
        opacity: header ? 1 : 0,
        config: config.molasses,
        transform: header
            ? `translate3d(0,0,0)`
            : `translate3d(-50%,0,0)`
    })

    const activityContent = [
        {
            dir: 'r-l',
            header: 'מועצת יהוד',
            p: `נבחרה להיות חברת מועצה בקדנציה.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            logo: {
                src: 'יהוד',
                alt: 'סמל מועצת העיר יהוד'
            },
            graphicType: 'video',
            graphic: {
                url: 'https://www.youtube.com/watch?v=6vVTnkFfly4&ab_channel=IGYIsrael' 
            }
        },
        {
            dir: 'l-r',
            header: 'מנהיגאה',
            p: `הקימה את תוכנית מנהיגאה.
            שזכתה למימון ותמיכה של קרן בלה בלה ובחסות של אירגון איגי - ארגון נוער גאה.
            התוכנית מיועדת לבני נוער בשנת ההגשמה וחזון התוכנית היא להכשיר את דור מנהיגי העתיד.
            דחמג לדגלחל דגלן'ק לחמבל לשדחלמדגל גצלד לךגד.
            דחמג לדגלחל דגלן'ק לחמבל לשדצךגדצדח.
            דחמג לדגלחל דגלן'ק לחמבל לשדחססצת חדלי ןדגןןן ןדיגן.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            logo: {
                src: 'מנהיגאה',
                alt: 'הלוגו של תוכנית מנהיגאה'
            },
            graphicType: 'video',
            graphic: {
                url: 'https://www.youtube.com/watch?v=6vVTnkFfly4&ab_channel=IGYIsrael' 
            }
        },
        {
            dir: 'r-l',
            header: 'הנחייה חברתית',
            p: `עובדת בתור מנחה חברתית בתיכון בן צבי.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשדדגמצדמ חדג.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדמנגד חנדגח.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            logo: {
                src: 'קריית-אונו',
                alt: 'הסמל של עריית קריית אונו'
            },
            logo2: {
                src: 'בן-צבי',
                alt: 'הסמל של תיכון בן-צבי'
            },
            graphicType: 'video',
            graphic: {
                url: 'https://www.youtube.com/watch?v=6vVTnkFfly4&ab_channel=IGYIsrael' 
            }
        },
        {
            dir: 'l-r',
            header: 'מרכזת שבט בוגרת',
            p: `נבחרה להיות חברת מועצה בקדנציה.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            logo: {
                src: 'הצופים',
                alt: 'סמל תנועת הנוער "הצופים"'
            },
            graphicType: 'video',
            graphic: {
                url: 'https://www.youtube.com/watch?v=6vVTnkFfly4&ab_channel=IGYIsrael' 
            }
        },
        {
            dir: 'r-l',
            header: 'תואר ראשון בחינוך ומנהל עסקים חברתיים',
            p: `נבחרה להיות חברת מועצה בקדנציה.
            מחדמדחג לדגלח גמח חמגדחד לדחךת מחגד.
            לשמדל שחדמשד חמד שחלשןחשן לש, לשחדלחש חישד חשד.
            דחמג לדגלחל דגלן'ק לחמבל לשדח.`,
            logo: {
                src: 'סמינר-הקיבוצים',
                alt: 'סמל מכללת סמינר הקיבוצים'
            },
            graphicType: 'video',
            graphic: {
                url: 'https://www.youtube.com/watch?v=6vVTnkFfly4&ab_channel=IGYIsrael' 
            }
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
                            העשייה שלי
                        </animated.h1>
                    </div>
                    <div>
                        {
                            activityContent.map((content, key) =>
                                <ActivityBox content={content} key={key} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
