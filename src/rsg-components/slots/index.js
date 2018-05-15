import Editor from '../Editor'; // eslint-disable-line no-unused-vars
import Usage from '../Usage'; // eslint-disable-line no-unused-vars
import IsolateButton from './IsolateButton'; // eslint-disable-line no-unused-vars
import CodeTabButton from './CodeTabButton'; // eslint-disable-line no-unused-vars
import UsageTabButton from './UsageTabButton'; // eslint-disable-line no-unused-vars

export const EXAMPLE_TAB_CODE_EDITOR = 'rsg-code-editor';
export const DOCS_TAB_USAGE = 'rsg-usage';

export default ({ pagePerSection }) => {
  const toolbar = pagePerSection ? [] : [IsolateButton];

  return {
    sectionToolbar: toolbar,
    componentToolbar: toolbar,
    exampleToolbar: toolbar,
    exampleTabButtons: [
      {
        id: EXAMPLE_TAB_CODE_EDITOR,
        render: CodeTabButton,
      },
    ],
    exampleTabs: [
      {
        id: EXAMPLE_TAB_CODE_EDITOR,
        render: Editor,
      },
    ],
    docsTabButtons: [
      {
        id: DOCS_TAB_USAGE,
        render: UsageTabButton,
      },
    ],
    docsTabs: [
      {
        id: DOCS_TAB_USAGE,
        render: Usage,
      },
    ],
  };
};
