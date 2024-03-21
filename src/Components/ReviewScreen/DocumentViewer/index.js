import React, { useState } from 'react';
import { formatTitle } from '../../../Services/utilService';
import './index.css';

const DocumentViewer = (props) => {
  const { colorMap, highlightedField } = props;
  const [zoomLevel, setZoomLevel] = useState(1); 

  const zoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const zoomOut = () => {
    if (zoomLevel > 0.2) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  const renderFields = (sections) => {
    if (sections.length != 0) {
        const currentSection = sections[props.currentField]
        return Object.entries(currentSection).map(([title, value]) => (
            <div className='DocumentViewer__content' style={{backgroundColor: highlightedField == title ? colorMap[title] : null}}>
                <span>
                    <strong>
                        {formatTitle(title)}:
                    </strong>
                </span>
                {' '}
                <span>{typeof value === 'string' || typeof value === 'number' ? value : ''}</span>
            </div>
        ));
    }
    return null;   
}

const fields = renderFields(props.sections);

  return (
    <>
        <div className="DocumentViewer" style={{ zoom: zoomLevel }}>
        <div className="content">
            {fields}
        </div>
        </div>
        <div className="zoom-controls">
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>
        </div>
    </>
  );
};

export default DocumentViewer;
