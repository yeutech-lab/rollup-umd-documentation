import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
// todo: change css to have with bs (not use css file, css file to delete
import '!!style-loader!css-loader!../../../loaders/tomorrow.css'; // eslint-disable-line import/no-webpack-loader-syntax
import Link from '../Link/LinkRenderer';
import Text from '../Text/TextRenderer';
import Para from '../Para/ParaRenderer';
import Code from '../Code/CodeRenderer';
import MarkdownHeading from './MarkdownHeading/MarkdownHeadingRenderer';
import List from './List/ListRenderer';
import Blockquote from './Blockquote/BlockquoteRenderer';
import Pre from './Pre/PreRenderer';
import Checkbox from './Checkbox/CheckboxRenderer';
import Hr from './Hr/HrRenderer';
import Table from './Table/TableRenderer';
import TableHead from './Table/TableHeadRenderer';
import TableBody from './Table/TableBodyRenderer';
import TableRow from './Table/TableRowRenderer';
import TableCell from './Table/TableCellRenderer';


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
    component: TableHead,
  },
  th: {
    component: TableCell,
    props: {
      header: true,
    },
  },
  tbody: {
    component: TableBody,
  },
  tr: {
    component: TableRow,
  },
  td: {
    component: TableCell,
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
