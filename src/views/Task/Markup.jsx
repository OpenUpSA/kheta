import React, { Fragment, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ProgressList from '../../components/ProgressList';
import GradientButton from '../../components/GradientButton';
import GradientSelect from '../../components/GradientSelect';


class FormBinder extends Component {
  constructor(props) {
    super(props);
    const { forceValue, array } = this.props;
    const realValue = array ? forceValue.split(', ') : forceValue;

    this.state = {
      value: realValue || null,
    };
  }

  updateArray = (index, newValue, array) => {
    const temp = array;
    temp[index] = newValue;

    this.setState({
      value: temp,
    });
  }

  updateValue = value => this.setState({ value });

  render() {
    const { props, state, ...events } = this;

    return (
      <Fragment>
        {props.callback(state.value, events.updateValue, events.updateArray)}
      </Fragment>
    );
  }
}


const FlexWrap = styled.div`
  display: flex;
`;

const ButtonWrap = styled.div`
  padding-right: 30px;
`;

const BodyText = styled(Typography)`
  && {
    color: #666;
    padding-bottom: 20px;
  }
`;

const SubmitWrap = styled.div`
  padding-top: 20px;
`;


const calcInput = (type, value, options, focus, next, changeAnswer, index) => {
  if (type === 'checkboxes') {
    return (
      <FormBinder
        callback={(innerValue, updateValue, updateArray) => {
          const displayValue = innerValue || options.map(() => null);

          return (
            <Fragment>
              <FormGroup ref={focus}>
                {
                  options.map(
                    (label, innerIndex) => (
                      <FormControlLabel
                        key={label}
                        {...{ label }}
                        control={(
                          <Checkbox
                            value={label}
                            checked={!!displayValue[innerIndex]}
                            color="primary"
                            onChange={() => updateArray(
                              innerIndex,
                              displayValue[innerIndex] ? null : label,
                              displayValue,
                            )}
                          />
                        )}
                      />
                    ),
                  )
                }
              </FormGroup>
              <SubmitWrap>
                <GradientButton
                  filled
                  text="Save Answer"
                  clickAction={() => next(index, innerValue)}
                />
              </SubmitWrap>
            </Fragment>
          );
        }}
      />
    );
  }


  if (type === 'string') {
    return (
      <FormBinder
        callback={(innerValue, updateValue) => (
          <Fragment>
            <TextField
              value={innerValue || ''}
              variant="outlined"
              label="Input answer"
              ref={focus}
              onChange={event => updateValue(event.target.value)}
            />

            <SubmitWrap>
              <GradientButton
                filled
                text="Save Answer"
                clickAction={() => next(index, innerValue)}
              />
            </SubmitWrap>
          </Fragment>
        )}
      />
    );
  }

  if (type === 'text') {
    return (
      <FormBinder
        callback={(innerValue, updateValue) => (
          <Fragment>
            <TextField
              value={innerValue || ''}
              multiline
              rows="4"
              variant="outlined"
              label="Input answer"
              ref={focus}
              onChange={event => updateValue(event.target.value)}
            />

            <SubmitWrap>
              <GradientButton
                filled
                text="Save Answer"
                clickAction={() => next(index, innerValue)}
              />
            </SubmitWrap>
          </Fragment>
        )}
      />
    );
  }

  if (type === 'select') {
    return (
      <GradientSelect
        value={value}
        filled
        options={options.map(text => ({
          text,
          callback: () => {
            next(index, text);
          },
        }))}
      />
    );
  }

  if (type === 'boolean') {
    return (
      <FlexWrap>
        <ButtonWrap>
          <GradientButton
            text="Yes"
            clickAction={() => {
              next(index, 'Yes');
            }}
            filled
          />
        </ButtonWrap>
        <ButtonWrap>
          <GradientButton
            text="No"
            clickAction={() => {
              next(index, 'No');
            }}
            filled
          />
        </ButtonWrap>
      </FlexWrap>
    );
  }

  return null;
};


const createItems = (questions, answers, changeAnswer) => {
  const result = questions.map((questionProp, index) => {
    const summary = answers.length >= index ? answers[index] : null;

    return {
      summary,
      title: questionProp.title,
      progress: !!summary,
      highlighted: !!summary,
      content: ({ focus, next }) => (
        <Fragment>
          <BodyText>{questionProp.description}</BodyText>
          {calcInput(
            questionProp.format,
            summary,
            questionProp.options,
            focus,
            next,
            changeAnswer,
            index,
          )}
        </Fragment>
      ),
    };
  });

  return result;
};


const Markup = ({ questions, answers, changeAnswer }) => {
  const items = createItems(questions, answers);
  return (
    <Fragment>
      <ProgressList {...{ items }} guided updateCallback={changeAnswer} />
    </Fragment>
  );
};


export default Markup;
