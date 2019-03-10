import React, { Component } from 'react';


import GpsMarkup from './GpsMarkup';


class Gps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manual: false,
      answer: null,
    };
  }

  activateManual = () => this.setState({ manual: true });

  updateAnswer = answer => this.setState({ answer });

  manualSave = (value) => {
    const { saveAnswer } = this.props;
    const { answer } = this.state;

    return saveAnswer({ type: 'gps', province: answer, value, manual: true });
  }

  getLocation = () => {
    const { saveAnswer } = this.props;

    return window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => saveAnswer(
        { type: 'gps', value: `${coords.latitude} ${coords.longitude}`, manual: false },
      ),
      () => alert('Sorry, your browser was unable to determine your location.'),
      {
        timeout: 5000,
      },
    );
  }

  render() {
    const {
      props,
      state,
      values,
      ...events
    } = this;

    const passedProps = {
      answer: state.answer,
      manual: state.manual,
      activateManual: events.activateManual,
      getLocation: events.getLocation,
      updateAnswer: events.updateAnswer,
      manualSave: events.manualSave,
    };

    return <GpsMarkup {...passedProps} />;
  }
}


export default Gps;
