import React from 'react';
import {SchemaForm} from 'react-schema-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RcSelect from 'react-schema-form-rc-select/lib/RcSelect';

const defaultProps = {
    schema: {
            "type": "object",
            "title": "Update Access Control",
            "required": [
                "accessLevel"
            ],
            "properties": {
                "name": {
                "title": "Name",
                "type": "string"
                },
                "accessLevel": {
                "title": "Access Level",
                "type": "array",
                "items": [
                    {
                    "value": "A",
                    "label": "Authorized to anyone"
                    },
                    {
                    "value": "N",
                    "label": "Not Accessible"
                    },
                    {
                    "value": "C",
                    "label": "Client Based"
                    },
                    {
                    "value": "R",
                    "label": "Role Based"
                    },
                    {
                    "value": "U",
                    "label": "User Based"
                    },
                    {
                    "value": "CR",
                    "label": "Client and Role Based"
                    },
                    {
                    "value": "CU",
                    "label": "Client and User Based"
                    },
                    {
                    "value": "RU",
                    "label": "Role and User Based"
                    },
                    {
                    "value": "CRU",
                    "label": "Client, Role and User Based"
                    }
                ]
                }
            }
        },
    form: [
        "name",
        {
            "key": "accessLevel",
            "type": "rc-select",
            "multiple": true
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