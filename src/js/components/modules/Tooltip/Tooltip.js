import './Tooltip.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import closedHTMLState from './states/tooltip-closed-state.html';
import openHTMLState from './states/tooltip-open-state.html';

class Tooltip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tooltipClosed: true
        };
    }

    componentWillMount() {
        var htmlExample = this.state.tooltipClosed ? closedHTMLState : openHTMLState;
        this.props.onChangeCallback(htmlExample);
    }

    _togglePopoverVisibility() {
        this.setState({
            tooltipClosed: !this.state.tooltipClosed
        })

        var htmlExample = this.state.tooltipClosed ? closedHTMLState : openHTMLState;
        this.props.onChangeCallback(htmlExample);
    }

    render() {
        var tooltipPopoverClasses = classnames('tooltip-popover', {
            'isVisuallyHidden': this.state.tooltipClosed
        });
        return (
            <div className="tooltip">
                <button className="tooltip-trigger"
                     onMouseEnter={this._togglePopoverVisibility.bind(this)}
                     onMouseLeave={this._togglePopoverVisibility.bind(this)}
                     onFocus={this._togglePopoverVisibility.bind(this)}
                     onBlur={this._togglePopoverVisibility.bind(this)}>
                    Trigger
                </button>
                <div className={tooltipPopoverClasses} role="tooltip" aria-hidden={this.state.tooltipClosed} >
                    This is tooltip text
                </div>
            </div>
        );
    }
}


export default Tooltip;