import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function topbar() {
    return (

        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Optimal Solution</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>

                    </div>
                    <div className="topbarIconContainer">
                        <Settings />

                    </div>
                    <img src="https://fr.lovepik.com/image-610428647/hand-drawn-cartoon-girl-avatar.html" alt="" className="topAvatar" />
                </div>

            </div>

        </div>


    )
}
