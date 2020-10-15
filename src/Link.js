import React from 'react';
import { withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const Link = ({ classes, iconColor, title, icon, source, disabled, isFa }) =>
    disabled ? (
        <span className='disabled-link'>
            <Icon style={{ fontSize: 80 }}>{icon}</Icon>

            <div className='title'>{title}</div>
        </span>
    ) : (
        <a target='_blank' rel='noopener noreferrer' href={source} className={'link ' + iconColor}>
            {isFa ? <Icon className={`icon fa fa-${icon}`} /> : <Icon className={`icon `}>{icon}</Icon>}
            <div className='title'>{title}</div>
        </a>
    );

const styles = (theme) => ({
    title: {
        margin: '0 auto',
    },
});

export default withStyles(styles)(Link);
