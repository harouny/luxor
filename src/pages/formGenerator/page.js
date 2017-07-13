import ReactDOM from 'react-dom';
import React from 'react';
import FormGenerator from '../../components/formGenerator';
import '../../xcomponents/formGenerator';

const xchildProps = window.xprops || {};

ReactDOM.render(<FormGenerator schema={xchildProps.schema} form={xchildProps.form} model={xchildProps.model} onModelChange={xchildProps.onModelChange} />, 
document.getElementsByTagName('form-generator')[0]);