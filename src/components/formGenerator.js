import React from 'react';
import {SchemaForm} from 'react-schema-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('style-loader!css-loader!rc-select/assets/index.css');
import RcSelect from 'react-schema-form-rc-select/lib/RcSelect';

const defaultProps = {
    schema: {
            "type": "object",
            "title": "Contact Information",
            "required": [
                "accessLevel"
            ],
            "properties": {
                "name": {
                    "title": "Name",
                    "type": "string"
                },
                "title": {
                    "title": "Title",
                    "type": "array",
                    "items": [
                            {
                            "value": "miss",
                            "label": "Miss"
                            },
                            {
                            "value": "Mr",
                            "label": "mr"
                            },
                    ]
                },
                "email":{
                    "type": "string",
                    "title": "Email"
                }
            }
        },
    form: [
        "name",
        {
            "key": "title",
            "type": "rc-select",
            "multiple": false
        }],
    model: {},
    onModelChange: function (name, value){
        console.debug(name, value)
    }
};

const mapper = {
    "rc-select": RcSelect
};
 
class FormGenerator extends React.Component {
    constructor(props){
        super(props);
        this.properties = props.schema ? props : defaultProps;
    }

    render() {
        return <MuiThemeProvider>
                <SchemaForm schema={this.properties.schema} form={this.properties.form} model={this.properties.model} onModelChange={this.properties.onModelChange} mapper={mapper} />
            </MuiThemeProvider>;
    }
}

export default FormGenerator;