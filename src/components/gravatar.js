import md5 from 'es-md5';
import React from 'react';

class Gravatar extends React.Component {
    constructor(props){
        super(props);
        const email = props.email || 'ahmedelharouny@yahoo.com';
        const size = props.size || 200;
        const hashedEmail = md5(email);
        this.gravatarSrc = '//www.gravatar.com/avatar/' + hashedEmail + '?s=' + size;
    }

    render() {
        return <img src={ this.gravatarSrc } />;
    }
}

export default Gravatar;