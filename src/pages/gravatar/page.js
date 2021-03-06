import ReactDOM from 'react-dom';
import React from 'react';
import Gravatar from '../../components/gravatar';
import '../../xcomponents/gravatar';

const xchildProps = window.xprops || {};

ReactDOM.render(<Gravatar email={xchildProps.email} size={xchildProps.size} changeEmail={xchildProps.changeEmail} />, 
document.getElementsByTagName('gravatar')[0]);