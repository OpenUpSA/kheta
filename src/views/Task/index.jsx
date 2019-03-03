import React, { Component } from 'react';
import t from 'prop-types';


import { titles } from './filters';
import buildCreateItems from './buildCreateItems';
import createModalProps from './createModalProps';
import createFilterOption from './createFilterOption';
import Markup from './Markup';


class Task extends Component {
  constructor(props) {
    super(props);
    const { questions = [], answers: initialAnswers } = this.props;

    const answers = initialAnswers || questions.map(() => null);

    this.state = {
      answers,
      filter: 0,
      modalOpen: null,
    };
  }


  toggleModal = () => {
    const { modalOpen } = this.state;
    return this.setState({ modalOpen: !modalOpen });
  }


  completeTask = () => {
    const { onTaskSubmit } = this.props;
    const { answers } = this.state;

    if (onTaskSubmit) {
      return onTaskSubmit(answers);
    }

    return null;
  }


  changeAnswer = ({ id, value }) => {
    const { onQuestionSave } = this.props;
    const { answers: currentAnswers } = this.state;

    if (!value) {
      return null;
    }

    if (onQuestionSave) {
      onQuestionSave({ index: id, value });
    }

    const answers = [
      ...currentAnswers.slice(0, id),
      value.value,
      ...currentAnswers.slice(id + 1),
    ];

    return this.setState({ answers });
  }


  changeFilter = filter => this.setState({ filter });


  render() {
    const {
      props,
      state,
      ...events
    } = this;

    const all = state.answers.length;
    const pending = state.answers.filter(answer => !answer).length;

    const amounts = {
      all,
      pending,
      completed: all - pending,
    };

    const filterOptions = titles.map(createFilterOption(amounts));
    const modalOpen = state.modalOpen === null && amounts.pending <= 0;

    const modalProps = createModalProps({
      modalOpen,
      toggleModal: events.toggleModal,
      completeTask: events.completeTask,
    });

    const createItems = buildCreateItems({
      questions: props.questions,
      answers: state.answers,
      filter: state.filter,
    });

    const passedProps = {
      modalProps,
      createItems,
      filterOptions,
      completed: amounts.pending <= 0,
      title: props.title,
      changeAnswer: events.changeAnswer,
      changeFilter: events.changeFilter,
      filter: state.filter,
      points: props.points,
      completeTask: events.completeTask,
      onMenuButtonPress: props.onMenuButtonPress,
    };

    return <Markup {...passedProps} />;
  }
}


export default Task;


Task.propTypes = {
  onSubmit: t.func.isRequired,
  onAnswerChange: t.func.isRequired,
  questions: t.arrayOf(
    t.shape({
      title: t.string,
      description: t.string,
      format: t.oneOf([
        'string',
        'text',
        'boolean',
        'select',
        'checkboxes',
        'gps',
      ]),
    }),
  ).isRequired,
};
