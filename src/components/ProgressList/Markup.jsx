import React, { Fragment } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import PanelState from './PanelState';
import GradientButton from '../GradientButton';


const SubmitWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;


const Markup = (props) => {
  const {
    buttons,
    incremental,
    items,
    focused,
    changeFocus,
    onComplete,
    next,
  } = props;

  const createPanels = items.map((itemProps, index) => {
    const passedProps = {
      incremental,
      buttons,
      index,
      focused,
      changeFocus,
      guided: !!onComplete,
      next,
      error: itemProps.error,
      progress: itemProps.progress,
      title: itemProps.title,
      summary: itemProps.summary,
      content: itemProps.content,
      highlighted: itemProps.highlighted,
    };

    return (
      <PanelState
        {...passedProps}
        key={itemProps.title}
      />
    );
  });

  const buildSubmit = () => (
    <SubmitWrapper>
      <GradientButton filled text="Submit Answers" clickAction={onComplete} />
    </SubmitWrapper>
  );


  return (
    <Fragment>
      {createPanels}
      {!!onComplete && items.filter(({ summary }) => !summary).length <= 0 && buildSubmit()}
    </Fragment>
  );
};


export default Markup;


Markup.propTypes = {
  onComplete: t.func,
  focused: t.number,
  changeFocus: t.func.isRequired,
  incremental: t.bool,
  buttons: t.bool,
  next: t.func,
  items: t.arrayOf(
    t.shape({
      progress: t.oneOfType([t.number, t.bool]),
      title: t.string,
      summary: t.oneOfType([t.string, t.array]),
      content: t.oneOfType([t.node, t.func]),
      highlighted: t.bool,
    }),
  ),
};


Markup.defaultProps = {
  onComplete: null,
  focused: null,
  incremental: false,
  buttons: false,
  items: null,
  next: null,
};
