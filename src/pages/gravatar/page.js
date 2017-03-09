import ReactDOM from 'react-dom';
import React from 'react';
import Gravatar from '../../components/gravatar';
import '../../xcomponents/gravatar';

const xchildProps = window.xchild ? window.xchild.props : {};

ReactDOM.render(<Gravatar email={xchildProps.email} size={xchildProps.size} />, 
document.getElementsByTagName('gravatar')[0]);