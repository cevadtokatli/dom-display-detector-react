import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import DDP from 'dom-display-detector';

export default class DOMDisplayDetector extends React.Component {
    constructor(props) {
        super(props);
        this.seen = this.seen.bind(this);
        this.unseen = this.unseen.bind(this);
    }

    componentDidMount() {
        this.el = findDOMNode(this);

        if(this.props.once) {
            DDP.bindOnce(this.el, this.seen, this.unseen);
        } else {
            DDP.bind(this.el, this.seen, this.unseen);
        }
    }

    componentWillUnmount() {
        DDP.unbind(this.el);
    }

    seen({target}) {
        this.props.seen(target);
        if(typeof this.node.seen === 'function') {
            this.node.seen(target);
        }
    }

    unseen({target}) {
        this.props.unseen(target);
        if(typeof this.el.unseen === 'function') {
            this.el.unseen(target);
        }
    }

    render() {
        return React.cloneElement(this.props.children, {ref:node => this.node = node});
    }
}

DOMDisplayDetector.propTypes = {
    once: PropTypes.bool,
    seen: PropTypes.func,
    unseen: PropTypes.func
};

DOMDisplayDetector.defaultProps = {
    once: false,
    seen: () => {},
    unseen: () => {}
};