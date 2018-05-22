import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
import Table from 'bootstrap-styled/lib/Table';
import Thead from 'bootstrap-styled/lib/Table/Thead';
import Tbody from 'bootstrap-styled/lib/Table/Tbody';
import Th from 'bootstrap-styled/lib/Table/Th';
import Tr from 'bootstrap-styled/lib/Table/Tr';
import Td from 'bootstrap-styled/lib/Table/Td';
import Link from '../Link';
import Text from '../Text';
import Para from '../Para';
import Code from '../Code';
import MarkdownHeading from './MarkdownHeading/MarkdownHeadingRenderer';
import List from './List/ListRenderer';
import Blockquote from './Blockquote/BlockquoteRenderer';
import Pre from './Pre/PreRenderer';
import Checkbox from './Checkbox/CheckboxRenderer';
import Hr from './Hr/HrRenderer';


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
