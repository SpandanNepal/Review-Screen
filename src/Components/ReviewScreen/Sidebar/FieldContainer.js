import React from 'react';
import { generateRandomColor, getInitials } from '../../../Services/utilService';

const FieldContainer = (props) => {
    const { title, value } = props;
    const color = generateRandomColor()
    const logoStyle = {
        backgroundColor: color,
    };

    return (
        <div className='FieldContainer'>
            <div className='FieldContainer__col'>
                <div className='FieldContainer__logo' style={logoStyle}>
                    {getInitials(title)}
                </div>
                <div>{typeof value === 'string' || typeof value === 'number' ? value : ''}</div>
            </div>
            <div className='FieldContainer__col'>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default FieldContainer;