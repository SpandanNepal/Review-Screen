import React, { useState, useEffect } from 'react';
import './index.css'
import Sidebar from './Sidebar';
import sectionsData from '../../sections.json';

const ReviewScreen = () => {
    const [sections, setSections] = useState('');

    useEffect(()=>{
        const data = sectionsData?.data.sections[0]?.children;
        setSections(data)
    },[])

    return (
        <div className='ReviewScreen'>
            <div className='ReviewScreen__previewer'>
                
            </div>
            <div className='ReviewScreen__sidebar'>
                <Sidebar sections={sections} />
            </div>
        </div>
    )
}

export default ReviewScreen