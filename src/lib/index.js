import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './progress.css';

class Progress extends Component {

    static propTypes = {
        state: PropTypes.string,
        width: PropTypes.number,
        transTime: PropTypes.string,
        animTime: PropTypes.string,
    };

    static defaultProps = {
        state: "",
        width: 70,
        transTime: ".5s",
        animTime: "2s"
    };

    render() {
        var wrapper = { height: this.props.width, width: this.props.width };
        var top = { width: this.props.width, transitionDuration: this.props.transTime };
        var bottom = { width: this.props.width, transitionDuration: this.props.transTime };
        switch (this.props.state) {
            case "load":
                top = { ...top, height: this.props.width, animationDuration: this.props.animTime }
                break;
            case "done":
                top = { ...top, height: this.props.width / 2 }
                break;
            case "fail":
                top = { ...top, transform: `translateY(${this.props.width / 2}px) rotate(45deg)` }
                bottom = { ...bottom, transform: `translateY(${this.props.width / 2}px) rotate(-45deg)` }
                break;
        }
        return (
            <div className={`prog prog-state-${this.props.state}`}>
                <div className="prog-wrapper" style={wrapper}>
                    <div className="prog-top" style={top} />
                    <div className="prog-bottom" style={bottom} />
                </div>
            </div>
        );
    }
}

export default Progress;