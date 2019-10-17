import React from 'react';
import '../assests/css/jani-input.css';



const input = ({ id, label, onChange, onBlur, value, error, type }) => (
    <div>
        <p className="jani-validate-text1">{label}</p>
        <input placeholder={`Enter ${label}`} className="jani-validate-input1" id={id} value={value} onChange={onChange} onBlur={onBlur} type={type ? type : 'text'} />
        <p  className="jani-validate1" style={{ color: '' }} >{error}</p>
    </div>
);

export default input;