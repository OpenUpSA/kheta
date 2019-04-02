/* eslint-disable import/no-extraneous-dependencies */

import CMS, { init } from 'netlify-cms';
import IconSelector from './widgets/IconSelector';
import IconSelectorMarkup from './widgets/IconSelector/Markup';
import createTasksCollection from './collections/createTasksCollection';

const config = {
  backend: {
    name: 'github',
    repo: 'OpenUpSA/khetha',
  },
  media_folder: 'static/assets',
  public_folder: 'assets',
  publish_mode: 'editorial_workflow',
  load_config_file: false,
  editor: {
    preview: false,
  },
  collections: [
    createTasksCollection(),
  ],
};


CMS.registerWidget('icon-selector', IconSelector, IconSelectorMarkup);


init({ config });
