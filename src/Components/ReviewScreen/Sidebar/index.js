import React, {useState}  from 'react';
import FieldContainer from './FieldContainer';

const Sidebar = (props) => {
    const [currentField, setCurrentField] = useState(0)

    const switchData = () => {
        if (currentField != props.sections.length)
            setCurrentField(currentField + 1)
        else 
            setCurrentField(0)
    }

    const renderFields = (sections) => {
        if (sections.length != 0) {
            const currentSection = sections[currentField]
            console.log(currentSection)
            return Object.entries(currentSection).map(([title, value]) => (
                <FieldContainer title={title} value={value} />
            ));
        }
        return null;   
    }

    const fields = renderFields(props.sections);
    
    return (
        <div className='Sidebar'>
            <span>Fields</span>
            <button onClick={switchData}>Next Field</button>
            {fields}
        </div>
    )
}

export default Sidebar