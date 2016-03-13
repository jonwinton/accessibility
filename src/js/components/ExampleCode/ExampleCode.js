import React, { Component, PropTypes } from 'react';
import Highlight from 'react-highlight';
import test from './test.html';

import { Tooltip } from '../modules';
import * as modules from '../modules';
import ReactDOM from 'react-dom/server';
import html from 'html';


class ExampleCode extends Component {
    constructor(props) {
        super(props);
        this.exampleMarkup = null;
        console.log(modules[props.component]);

    }

    _renderComponent() {
        var Component = modules[this.props.component];
        return <Component onChangeCallback={this._onExampleChangeCallback.bind(this)} />
    }

    _getHtml(markup) {
        return html.prettyPrint(this.exampleMarkup);
    }

    _onExampleChangeCallback(exampleCode) {
        this.exampleMarkup = exampleCode;
        this.forceUpdate();
    }

    render() {
        var Component = this.props.component;
        console.log(Component);
        return (
            <div className="exampleCode">
                <div className="exampleCode-raw">
                    <Highlight className='html'>
                        {this._getHtml()}
                    </Highlight>
                </div>
                <div className="exampleCode-component">
                    {this._renderComponent()}

                </div>
            </div>
        );
    }
}

ExampleCode.PropTypes = {
    component: PropTypes.string.isRequired
};

export default ExampleCode;
