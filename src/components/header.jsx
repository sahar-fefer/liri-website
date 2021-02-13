import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Header = () => {
    return (
        <header id={'header'} className={'container-fluid'}>
            <nav className={'row'}>
                <div className="justify-content-start col-auto">
                    <div className={'link-wrapper'}>
                        <Link to="/">logo</Link>
                    </div>
                </div>
                <div className="row justify-content-end col">
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">מי אני</Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">תכנים</Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">המלצות</Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link to="/">צור קשר</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
