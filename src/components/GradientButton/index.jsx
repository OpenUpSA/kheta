import React, { Component } from 'react';
import t from 'prop-types';
import Markup from './Markup';


class GradientButton extends Component {
  state = {
    loading: false,
  }

  startLoading = (autoKill) => {
    this.setState({ loading: true });

    if (autoKill) {
      setTimeout(
        () => this.setState({ loading: false }),
        2000,
      );
    }
  };

  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      ...props,
      loading: state.loading,
      startLoading: events.startLoading,
    };

    return <Markup {...passedProps} />;
  }
}


export default GradientButton;


GradientButton.propTypes = {
  /** Accepts a React ref created via 'React.createRef' to link the underlying HTML 
   * node to a React state */
  buttonRef: t.shape({
    current: t.node,
  }),
  /** If function is passed it will be called when button is clicked,
   * if string is passed url will be hotloaded via AJAX when button is
   * clicked. However if string links to an external domain a url will
   * be opened in new tab when button is clicked */
  clickAction: t.oneOfType([
    t.string,
    t.func,
  ]).isRequired,
  /** The text to display in the button */
  text: t.string,
  /** Whether the background should have
   * the branded gradient backgrounds */
  filled: t.bool,
  /** Whether the button should span the entirity (100%)
   * of the width of it's parent. */
  full: t.bool,
  /** Whether button should have an additional
   * label prefixed to the text. Useful if you
   * want to communicate state */
  prefix: t.string,
  /** A icon that should be used on the right side
   * of the button. Preferably an icon imported
   * from `@material-ui/icons` */
  icon: t.string,
  /** You need to pass a component that handles routing
   * and history state for page transitions in your React app.
   * In our case we need to pass `Link` from `import { Link } from 'gatsby'. */
  link: t.func,
};

GradientButton.defaultProps = {
  buttonRef: null,
  text: null,
  filled: false,
  prefix: null,
  icon: null,
  link: null,
  full: false,
};
