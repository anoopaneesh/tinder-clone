import './SwipeButtons.css'
import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__replay swipeButtons__button">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__close swipeButtons__button">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star swipeButtons__button">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__favorite swipeButtons__button">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__flash swipeButtons__button">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
