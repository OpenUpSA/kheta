import React from 'react';
import t from 'prop-types';


import {
  Points,
  Title,
  IconWrap,
  StyledIcon,
  HeaderWrapper,
  Header,
} from './styled';


const buildPoints = points => (
  <Points component="span">
    {`${points} Khetha Points`}
  </Points>
);


const buildTitle = title => (
  <Title component="h2">
    {title}
  </Title>
);


const buildIcon = icon => (
  <IconWrap>
    <StyledIcon size="huge" type={icon} color="blue" />
  </IconWrap>
);


const Heading = (props) => {
  const {
    points,
    title,
    icon = 'Grade',
  } = props;

  return (
    <HeaderWrapper>
      <Header>
        {points && buildPoints(points)}
        {title && buildTitle(title)}
      </Header>
      {icon && buildIcon(icon)}
    </HeaderWrapper>
  );
};


export default Heading;


Heading.propTypes = {
  /** Total number of points that have been accumulated */
  points: t.number,
  /** The title that will be displayed in the header */
  title: t.string.isRequired,
  /** An icon that should be used on the right side
   * of the heading. Preferably an icon imported
   * from `@material-ui/icons` */
  icon: t.string,
};


Heading.defaultProps = {
  icon: null,
  points: null,
};
