import React from 'react';
import { getInitials, formatTitle } from '../../../Services/utilService';

const FieldContainer = (props) => {
    const { title, value, colorMap, setHighlightField } = props;

    const handleMouseEnter = () => {
        setHighlightField(title)
    };

    const handleMouseLeave = () => {
        setHighlightField(null)
    }

    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='FieldContainer'
        >
            <div className='FieldContainer__col'>
                <div className='FieldContainer__logo' style={{backgroundColor: colorMap != {} ? colorMap[title] : null}}>
                    {getInitials(title)}
                </div>
                <div className='FieldContainer__content'>
                    <div className='FieldContainer__content--title'>
                        <strong>
                            {formatTitle(title)}
                        </strong>
                    </div>
                    <div>{typeof value === 'string' || typeof value === 'number' ? value : ''}</div>
                </div>
            </div>
            <div className='FieldContainer__col'>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default FieldContainer;