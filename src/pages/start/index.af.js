import { createElement } from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Start from '../../views/Start';


const calcIfActive = schedule => moment
  .duration({ to: moment(new Date(schedule)), from: moment() })
  .asDays() <= 0;


const createProps = ({ allTasksJson, allViewsJson }) => {
  const tasks = allTasksJson.edges.map(({ node }) => ({
    points: node.points,
    active: calcIfActive(node.schedule),
    ...node.af,
  }));

  const view = allViewsJson.edges[0].node.af;

  return {
    tasks,
    view,
  };
};


export default ({ data }) => createElement(Start, createProps(data));


export const query = graphql`query {
  allTasksJson {
    edges {
      node {
        schedule
        points
        af {
          title
          description
          tasks {
            title
            description
            format
          }
        }
      }
    }
  }
  allViewsJson (
    filter: {
      type: {
        eq: "views"
      }
      id: {
        eq: "start"
      }
    }
  ) {
    edges {
      node {
        af {
          points
          filter {
            title
            difficulty
          }
          more {
            title
            description
          }
        }
      }
    }
  }
}`;
