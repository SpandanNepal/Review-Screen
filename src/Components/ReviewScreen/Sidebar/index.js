import React  from 'react';
import FieldContainer from './FieldContainer';

const Sidebar = (props) => {
    const { onFieldChange, colorMap, setHighlightField} = props;
    const renderFields = (sections) => {
        if (sections.length != 0) {
            const currentSection = sections[props.currentField]
            return Object.entries(currentSection).map(([title, value]) => (
                <FieldContainer 
                title={title} 
                value={value} 
                onFieldChange={onFieldChange}
                colorMap={colorMap}
                setHighlightField={setHighlightField}
                />
            ));
        }
        return null;   
    }

    const fields = renderFields(props.sections);
    
    return (
        <div className='Sidebar'>
            <h1>Fields</h1>
            <button onClick={props.switchData}>Next Field</button>
            {fields}
        </div>
    )
}

export default Sidebar