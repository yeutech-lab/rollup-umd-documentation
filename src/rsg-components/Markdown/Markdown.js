import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
import Table from 'bootstrap-styled/lib/Table'; // eslint-disable-line no-unused-vars
import Thead from 'bootstrap-styled/lib/Table/Thead'; // eslint-disable-line no-unused-vars
import Tbody from 'bootstrap-styled/lib/Table/Tbody'; // eslint-disable-line no-unused-vars
import Th from 'bootstrap-styled/lib/Table/Th'; // eslint-disable-line no-unused-vars
import Tr from 'bootstrap-styled/lib/Table/Tr'; // eslint-disable-line no-unused-vars
import Td from 'bootstrap-styled/lib/Table/Td'; // eslint-disable-line no-unused-vars
import Link from '../Link'; // eslint-disable-line no-unused-vars
import Text from '../Text'; // eslint-disable-line no-unused-vars
import Para from '../Para'; // eslint-disable-line no-unused-vars
import Code from '../Code'; // eslint-disable-line no-unused-vars
import MarkdownHeading from './MarkdownHeading/MarkdownHeadingRenderer'; // eslint-disable-line no-unused-vars
import List from './List/ListRenderer'; // eslint-disable-line no-unused-vars
import Blockquote from './Blockquote/BlockquoteRenderer'; // eslint-disable-line no-unused-vars
import Pre from './Pre/PreRenderer'; // eslint-disable-line no-unused-vars
import Checkbox from './Checkbox/CheckboxRenderer'; // eslint-disable-line no-unused-vars
import Hr from './Hr/HrRenderer'; // eslint-disable-line no-unused-vars


export const baseOverrides = {
  a: {
    component: Link,
  },
  h1: {
    component: MarkdownHeading,
    props: {
      level: 1,
    },
  },
  h2: {
    component: MarkdownHeading,
    props: {
      level: 2,
    },
  },
  h3: {
    component: MarkdownHeading,
    props: {
      level: 3,
    },
  },
  h4: {
    component: MarkdownHeading,
    props: {
      level: 4,
    },
  },
  h5: {
    component: MarkdownHeading,
    props: {
      level: 5,
    },
  },
  h6: {
    component: MarkdownHeading,
    props: {
      level: 6,
    },
  },
  p: {
    component: Para,
    props: {
      semantic: 'p',
    },
  },
  em: {
    component: Text,
    props: {
      semantic: 'em',
    },
  },
  strong: {
    component: Text,
    props: {
      semantic: 'strong',
    },
  },
  ul: {
    component: List,
  },
  ol: {
    component: List,
    props: {
      ordered: true,
    },
  },
  blockquote: {
    component: Blockquote,
  },
  code: {
    component: Code,
  },
  pre: {
    component: Pre,
  },
  input: {
    component: Checkbox,
  },
  hr: {
    component: Hr,
  },
  table: {
    component: Table,
  },
  thead: {
    component: Thead,
  },
  th: {
    component: Th,
    props: {
      header: true,
    },
  },
  tbody: {
    component: Tbody,
  },
  tr: {
    component: Tr,
  },
  td: {
    component: Td,
  },
};

export const inlineOverrides = {
  ...baseOverrides,
  p: {
    component: Text,
  },
};

function Markdown({ text, inline }) {
  const overrides = inline ? inlineOverrides : baseOverrides;
  return compiler(text, { overrides, forceBlock: true });
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

export default Markdown;
