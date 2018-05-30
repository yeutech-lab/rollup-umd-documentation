import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
// todo: when styleguideRenderer is used it throw a babel error for loader/tomorrow.css
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
import MarkdownTable from './MarkdownTable/MarkdownTableRenderer';
import TableHead from './MarkdownTable/TableHeadRenderer';
import TableBody from './MarkdownTable/TableBodyRenderer';
import TableRow from './MarkdownTable/TableRowRenderer';
import TableCell from './MarkdownTable/TableCellRenderer';


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
    component: MarkdownTable,
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
