import React, { Fragment } from 'react';
import t from 'prop-types';


import Layout from '../../components/Layout';
import Content from './Content';
import GradientButton from '../../components/GradientButton';
import GradientSelect from '../../components/GradientSelect';
import SectionHeading from '../../components/SectionHeading';
import ProgressList from '../../components/ProgressList';
import Modal from './Modal';
import logoSrc from './big-debate-logo.png';
import { 
  Section,
  SubmitWrapper,
  FilterWrapper,
  Logo,
} from './styled';


const Markup = (props) => {
  const {
    title,
    changeAnswer,
    changeFilter,
    filter,
    points,
    modalProps,
    createItems,
    filterOptions,
    completeTask,
    completed,
    onMenuButtonPress,
    isolated,
    logo,
  } = props;

  const items = createItems(Content);

  const buildSubmit = () => (
    <SubmitWrapper>
      <GradientButton primary text="Submit Answers" resolve="long" onButtonPress={completeTask} />
    </SubmitWrapper>
  );

  return (
    <Fragment>
      <Modal {...modalProps} />
      <Layout {...{ points, onMenuButtonPress, isolated }}>
        {!!logo && <Logo src={logoSrc} alt="" />}
        <Section>
          <SectionHeading gutter text={title} />
          <FilterWrapper>
            <GradientSelect
              options={filterOptions}
              fullWidth
              placeholder="Filter questions"
              prefix="Filtering by"
              onSelectionChange={changeFilter}
            />
          </FilterWrapper>
          <ProgressList
            {...{ items }}
            advance={filter === 0 && !completed}
            onSaveAnswer={changeAnswer}
          />
        </Section>
        {completed && buildSubmit()}
      </Layout>
    </Fragment>
  );
};


export default Markup;


Markup.propTypes = {
  title: t.string.isRequired,
  answers: t.arrayOf(t.string),
  changeAnswer: t.func.isRequired,
  onComplete: t.func.isRequired,
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


Markup.defaultProps = {
  answers: [],
};
