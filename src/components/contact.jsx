import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';

import validate from './validator';
import InputErrors from './inputErrors';

export const Contact = () => {
    const [header, setHeadre] = useState(false);
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);
    const [accordion4, setAccordion4] = useState(false);

    const [isSubmmited, setIsSubmmited] = useState('')
    const ERRORS = {
        name: {
            required: "נא רשום את שמך",
            minLength: "שמך צריך להיות מורכב מלפחות 2 תווים",
            pattern: "שמך מכיל תווים לא חוקיים"
        },
        email: {
            required: "נא רשום את כתובת המייל",
            pattern: "מייל מכיל תווים לא חוקיים"
        },
        phone: {
            required: "נא רשום את מספר הטלפון",
            pattern: "מספר טלפון מכיל תווים לא חוקיים"
        },
        company: {
            required: "נא לרשום את שם הארגון",
            minLength: "שם הארגון צריך להכיל לפחות 2 תוים",
        },
        message: {
            required: "נא רשום את הודעתך",
            minLength: "ההודעה צריכה להיות מורכבת מלפחות 10 תווים",
            pattern: "ההודעה מכילה תווים לא חוקיים"
        }
    }

    const [values, setValues] = useState({
        name: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 3,
                pattern: /^[a-zא-תA-Z ]*$/
            }
        },
        email: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 0,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        },
        phone: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 0,
                pattern: /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/
            }
        },
        company: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 3,
                pattern: /^[a-zא-תA-Z ]*$/
            }
        },
        message: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 10,
                pattern: /^[a-zא-תA-Z0-9!?/(),. _%+-]*$/
            }
        }
    })

    const headrSwap = useSpring({
        opacity: header ? 1 : 0,
        config: config.molasses,
        transform: header
            ? `translate3d(0,0,0)`
            : `translate3d(-50%,0,0)`
    })

    const { y1, y2, y3, y4, marginBottom } = useSpring({
        y1: accordion1 ? 0 : 1,
        y2: accordion2 ? 0 : 1,
        y3: accordion3 ? 0 : 1,
        y4: accordion4 ? 0 : 1,
        marginBottom: '20px'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: {
                ...values[name],
                value
            }
        });
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;

        const errors = validate(name, value, values[name].validations, ERRORS);

        setValues({
            ...values,
            [name]: {
                ...values[name],
                value,
                errors
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        let isOK = true;

        for (const name in values) {
            console.log(name)
            const field = values[name];
            const errors = validate(name, field.value, field.validations, ERRORS);
            if (errors.length) {
                isOK = false;
                setIsSubmmited('fillErr')
                console.log('errors', errors)
                setValues({
                    ...values,
                    [name]: {
                        ...values[name],
                        errors
                    }
                })
            }
        }

        if (isOK) {
            emailjs.sendForm('service_56lr3eh', 'template_x4r5xea', e.target, "user_s4TwhJIxgZNXyXz3WcQwI")
                .then((result) => {
                    console.log('result', result);
                    setIsSubmmited(result && 'ok')
                }, (error) => {
                    console.log('error', error);
                    setIsSubmmited(error && 'submitErr')
                });
            setValues({
                ...values,
                ['name']: {
                    ...values['name'],
                    value: '',
                    error: []
                },
                ['phone']: {
                    ...values['phone'],
                    value: '',
                    error: []
                },
                ['company']: {
                    ...values['company'],
                    value: '',
                    error: []
                },
                ['email']: {
                    ...values['email'],
                    value: '',
                    error: []
                },
                ['message']: {
                    ...values['message'],
                    value: '',
                    error: []
                }
            });
            e.target.reset()
        }
    }

    console.log('values', values);

    return (
        <div id={'contact'}>
            <div className="container">
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
                        צרו קשר
                    </animated.h1>
                </div>
                <div className="container">
                    <div className={'wrapper row align-items-center'}>
                        <div className={'col-md-6 col-lg ml-4 mr-4 ml-sm-0 mr-sm-0'}>
                            <div>
                                <Waypoint
                                    bottomOffset="20%"
                                    topOffset='-20%'
                                    onEnter={() => {
                                        if (!accordion1) setAccordion1(true);
                                    }}
                                />
                                <animated.h3 style={{
                                    transform: y1
                                        .interpolate({
                                            range: [0, 0.25, 0.5, 0.75, 1],
                                            output: [0, 25, 50, 75, 100]
                                        })
                                        .interpolate(y1 => `translate3d(0, ${y1}px, 0)`),
                                    marginBottom
                                }}> בלה בלה בלה </animated.h3>
                            </div>
                            <div>
                                <Waypoint
                                    bottomOffset="20%"
                                    topOffset='-20%'
                                    onEnter={() => {
                                        if (!accordion2) setAccordion2(true);
                                    }}
                                />
                                <animated.h3 style={{
                                    transform: y2
                                        .interpolate({
                                            range: [0, 0.25, 0.5, 0.75, 1],
                                            output: [0, 25, 50, 75, 100]
                                        })
                                        .interpolate(y2 => `translate3d(0, ${y2}px, 0)`),
                                    marginBottom
                                }}> בלה בלה בלה </animated.h3>
                            </div>
                            <div>
                                <Waypoint
                                    bottomOffset="20%"
                                    topOffset='-20%'
                                    onEnter={() => {
                                        if (!accordion3) setAccordion3(true);
                                    }}
                                />
                                <animated.h3 style={{
                                    transform: y3
                                        .interpolate({
                                            range: [0, 0.25, 0.5, 0.75, 1],
                                            output: [0, 25, 50, 75, 100]
                                        })
                                        .interpolate(y3 => `translate3d(0, ${y3}px, 0)`),
                                    marginBottom
                                }}> בלה בלה בלה </animated.h3>
                            </div>
                            <div>
                                <Waypoint
                                    bottomOffset="20%"
                                    topOffset='-20%'
                                    onEnter={() => {
                                        if (!accordion4) setAccordion4(true);
                                    }}
                                />
                                <animated.h3 style={{
                                    transform: y4
                                        .interpolate({
                                            range: [0, 0.25, 0.5, 0.75, 1],
                                            output: [0, 25, 50, 75, 100]
                                        })
                                        .interpolate(y4 => `translate3d(0, ${y4}px, 0)`),
                                    marginBottom
                                }}>
                                    בלה בלה בלה
                                </animated.h3>
                            </div>
                        </div>
                        <form className={'form col'} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        name={'name'}
                                        value={values['name'].value}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="שמך" />
                                    {
                                        values['name'].errors &&
                                        <InputErrors errors={values['name'].errors}></InputErrors>
                                    }
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        name={'email'}
                                        value={values['email'].value}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="כתובת מייל" />
                                    {
                                        values.email.errors &&
                                        <InputErrors errors={values['email'].errors}></InputErrors>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="phone"
                                        name={'phone'}
                                        value={values['phone'].value}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="מספר טלפון" />
                                    {
                                        values.email.errors &&
                                        <InputErrors errors={values['phone'].errors}></InputErrors>
                                    }
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        name={'company'}
                                        value={values['company'].value}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="חברה\מכינה\ארגון" />
                                    {
                                        values.email.errors &&
                                        <InputErrors errors={values['company'].errors}></InputErrors>
                                    }
                                </div>
                            </div>
                            <textarea
                                type="text"
                                name={'message'}
                                value={values['message'].value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="הודעתך"
                                rows="6"
                                cols="50" />
                            {
                                values['message'].errors &&
                                <InputErrors errors={values['message'].errors}></InputErrors>
                            }
                            <div className="submit-wrapper">
                                <input type="submit" value="לשליחה" className={'submit'} />
                            </div>
                            {
                                isSubmmited === 'fillErr' &&
                                <div>
                                    אנא בדוק את כל השדות המבוקשים לפני שליחת הטופס.
                                </div>
                            }
                            {
                                isSubmmited === 'submitErr' &&
                                <div>
                                    אופס! הייתה בעיה בשליחת ההודעהת בבקשה נסה שוב.
                                </div>
                            }
                            {
                                isSubmmited === 'ok' &&
                                <div>
                                    ההודעה שלך נשלחה בהצלחה!
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};