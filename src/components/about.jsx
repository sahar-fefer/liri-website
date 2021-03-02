import React, {useState} from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, useTrail, animated, config } from 'react-spring';

export const About = () => {
    const [isSkill, setIsSkill] = useState(false);
    const [header, setHeadre] = useState(false);
    const [introduce, setIntroduce] = useState(false);

    const lecturedPlace = [
        {
            name: 'הצופים',
            href: 'https://www.zofim.org.il/'
        },
        {
            name: 'חיל-האוויר',
            href: 'https://www.iaf.org.il/9202-he/IAF.aspx'
        },
        {
            name: 'תבור',
            href: 'https://tavor.org.il/'
        },
        {
            name: 'נחשון',
            href: 'http://www.m-nachshon.org/'
        },
        {
            name: 'חצבה',
            href: 'http://www.marava.org.il/70908.html'
        },
        {
            name: 'עין-יהב',
            href: 'https://mechinot.org.il/magazine/shavuto-tashach/ein-yahav-808'
        },
        {
            name: 'תשתית',
            href: 'http://bfree.org.il/%D7%AA%D7%9B%D7%A0%D7%99%D7%AA-%D7%AA%D7%A9%D7%AA%D7%99%D7%AA-%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%A7%D7%98%D7%99%D7%91%D7%99%D7%A1%D7%98%D7%99%D7%9D-%D7%91%D7%AA%D7%97%D7%95%D7%9D-%D7%93%D7%AA-%D7%95%D7%9E%D7%93%D7%99%D7%A0%D7%94'
        },
        {
            name: "סופרוויז'ן",
            href: 'http://kidcoach.co.il/'
        }
    ]

    const headrSwap = useSpring({
        opacity: header ? 1 : 0,
        config: config.molasses,
        transform: header
            ? `translate3d(0,0,0)`
            : `translate3d(-50%,0,0)`
    })

    const leftIntroduce = useSpring({
        transform: introduce
            ? `translate3d(0,0,0)`
            : `translate3d(-150%,0,0)`,
        config: config.slow
    });

    const rightIntroduce = useSpring({
        transform: introduce
            ? `translate3d(0,0,0)`
            : `translate3d(150%,0,0)`,
        config: config.slow
    });

    const introduceSwipe = useSpring({
        opacity: introduce ? 1 : 0
    })

    const lecturedPlaceTrail = useTrail(lecturedPlace.length, {
        opacity: isSkill ? 1 : 0,
        transform: isSkill ? 'rotateY(0deg) scale(1)' : 'rotateY(180deg) scale(0.3)'
    })

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
                            מי אני
                        </animated.h1>
                    </div>
                    <div className="row">
                        <Waypoint
                            bottomOffset="20%"
                            topOffset='-20%'
                            onEnter={() => {
                                if (!introduce) setIntroduce(true);
                            }}
                        />
                        <animated.div style={introduceSwipe}
                            className="col-sm-auto linkedin-wrapper perfect-center">
                        </animated.div>
                        <animated.div style={introduceSwipe} className="introduc col">
                            <h2>מחגדש מדגחגד חמדלגדשל גשדינ</h2>
                            <h4>ךלגךלדגךג חמה גלכן ןגחגמג חמבחלגב חלגמבח גזבחנחגב נגבחב</h4>
                            <h4>ךלגךלדגךג חמה גלכן ןגחגמג חמבחלגב חלגמבח גזבחנחגב נגבחב דחגנחדגנ</h4>
                            <h4>ךלגךלדגךג חמה גלכן ןגחגמג חמבחלגב חלגמבח גזבחנ</h4>
                            <h4>ךלגךלדגךג חמה גלכן ןגחגמג חמבחלגב חלגמבח גזבחנ לחדיגדגח דיי לדןדחגדגדגדג</h4>
                            <h4>ךלגךלדגךג חמה גלכן ןגחגמג חמבחלגב חלגמבח גזבחנ ךדחלךגיד חדיגלד ינגיד ינגדיעט יי</h4>
                            <h4>ךלגךלדגךג חמה גלכן ןגחגמג חמבחלגב חלגמבח גזבחנ ךדחלךגיד חדיגלד </h4>
                        </animated.div>
                    </div>
                    <div className="row">
                        <ul className={'lecturs-wrapper row'}>
                            <Waypoint
                                bottomOffset="10%"
                                topOffset='-10%'
                                onEnter={() => {
                                    if (!isSkill) setIsSkill(true);
                                }}
                            />
                            {
                                lecturedPlaceTrail.map((animation, key) =>
                                    < animated.li style={animation} className={`img-wrapper perfect-center col-6 col-md-3`} >
                                        <a href={lecturedPlace[key].href} target="_blank">
                                            <img src={`/media/lecturedPlace/${lecturedPlace[key].name}.png`} alt={lecturedPlace[key].name} className={`lecture-img`} />
                                        </a>
                                    </ animated.li >
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}
