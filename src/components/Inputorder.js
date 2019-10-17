import React from 'react';
import '../assests/css/jani-orderinput.css'


const Inputorder = ({ id, label, onChange, onBlur, value, error, type }) => (
    <div>
        <p className=""></p>
        <input placeholder={`Enter ${label}`} className="jani-validate-input" id={id} value={value} onChange={onChange}  onBlur={onBlur} type={type ? type : 'text'} />
        <p  className="jani-validate" style={{ color: '' }} >{error}</p>
    </div>
);

export default Inputorder;