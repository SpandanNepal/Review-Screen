import React, { useState, useEffect } from 'react';
import './index.css'
import Sidebar from './Sidebar';
import sectionsData from '../../sections.json';
import DocumentViewer from './DocumentViewer';

import { generateRandomColor } from '../../Services/utilService';

const ReviewScreen = () => {
    const [colorMap, setColorMap] = useState({})
    const [sections, setSections] = useState('');
    const [currentField, setCurrentField] = useState(0)
    const [highlightField, setHighlightField] = useState(null);

    useEffect(()=>{
        const data = sectionsData?.data.sections[0]?.children;
        setSections(data)
    },[]);

    useEffect(() => {
        const colorMap = generateColorMap(sections)
        setColorMap(colorMap)
    }, [sections])

    const switchData = () => {
        if (currentField != (sections != '' && sections.length - 2))
            setCurrentField(currentField + 1)
        else 
            setCurrentField(0)
    }

    const generateColorMap = (sections) => {
        const colorMap = {};
        if (sections) {
            Object.keys(sections[currentField]).forEach(key => {
                const color = generateRandomColor();
                colorMap[key] = color;
            });
        }

        return colorMap
    }

    const setNewHighlightField = (field) => {
        setHighlightField(field)
    }

    return (
        <div className='ReviewScreen'>
            <div className='ReviewScreen__previewer'>
                <DocumentViewer 
                    sections={sections} 
                    currentField={currentField}
                    colorMap={colorMap}
                    highlightedField={highlightField}
                />
            </div>
            <div className='ReviewScreen__sidebar'>
                <Sidebar
                    sections={sections} 
                    currentField={currentField}
                    switchData={switchData}
                    colorMap={colorMap}
                    setHighlightField={setNewHighlightField}
                />
            </div>
        </div>
    )
}

export default ReviewScreen