import md5 from 'es-md5';
import React from 'react';

class Gravatar extends React.Component {
    constructor(props){
        super(props);
        const email = props.email || 'ahmedelharouny@yahoo.com';
        const size = props.size || 200;
        const hashedEmail = md5(email);
        this.state = { 
            gravatarSrc: '//www.gravatar.com/avatar/' + hashedEmail + '?s=' + size + '&d=identicon',
            changeEmail: props.changeEmail,
            size: size
        };
        this.changeImage = this.changeImage.bind(this);
        this.style = {
            cursor: 'hand',
        }
    }

    changeImage(){
        if(!this.state.changeEmail) return;
        const newEmail = this.state.changeEmail().then((newEmail) => {
            if(newEmail)
            {
                const hashedEmail = md5(newEmail);
                this.setState(prevState => ({
                    gravatarSrc: '//www.gravatar.com/avatar/' + hashedEmail + '?s=' + this.state.size + '&d=identicon'
                }));
            }
        });
        
    }

    render() {
        return <img style={this.style} onClick={this.changeImage} src={ this.state.gravatarSrc } />;
    }
}

export default Gravatar;