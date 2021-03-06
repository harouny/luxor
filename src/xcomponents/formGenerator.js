import xcomponent from '../../node_modules/xcomponent/dist/xcomponent';

window.LuxorFormGeneratorComponenet = xcomponent.create({
    // The html tag used to render my component 
    tag: 'luxor-form-generator',
 
    // The url that will be loaded in the iframe or popup, when someone includes my component on their page 
    url: document.currentScript.src.replace(/[^\/]+$/, 'page.html'),
 
    // The size of the component on their page 
    dimensions: {
        width: '100%',
        height: '400px'
    },
 
    // The properties they can (or must) pass down to my component 
    props: {
        schema: {
            type: 'object',
            required: false
        },
        form: {
            type: 'object',
            required: false
        },
        model: {
            type: 'object',
            required: false
        },
        onModelChange: {
            type: 'function',
            required: false
        }
    }
});