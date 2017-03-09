import xcomponent from '../../node_modules/xcomponent/dist/xcomponent';

window.LuxorGravatarComponenet = xcomponent.create({
    // The html tag used to render my component 
    tag: 'luxor-gravatar',
 
    // The url that will be loaded in the iframe or popup, when someone includes my component on their page 
    url: document.currentScript.src.replace(/[^\/]+$/, 'page.html'),
 
    // The size of the component on their page 
    dimensions: {
        width: 400,
        height: 400
    },
 
    // The properties they can (or must) pass down to my component 
    props: {
        email: {
            type: 'string',
            required: true
        },
        getEmailAsync: {
            type: 'function',
            required: false
        }
    }
});