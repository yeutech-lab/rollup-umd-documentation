import React from 'react';
import LayoutRenderer from './LayoutRenderer';

// TODO: move to config, and create schema config
const GA_ID_YEUTECH_COM = 'UA-120906117-1';

// TODO: remove this file and use configuration
export default (props) => <LayoutRenderer {...props} ga={{ id: GA_ID_YEUTECH_COM }} />;
