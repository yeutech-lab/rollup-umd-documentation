import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Markdown from '../Markdown'; // eslint-disable-line no-unused-vars
import Argument from '../Argument'; // eslint-disable-line no-unused-vars
import Arguments from '../Arguments'; // eslint-disable-line no-unused-vars
import Name from '../Name'; // eslint-disable-line no-unused-vars
import JsDoc from '../JsDoc'; // eslint-disable-line no-unused-vars
import Table from '../Table'; // eslint-disable-line no-unused-vars

const getRowKey = (row) => row.name;

export const columns = [
  {
    caption: 'Method name',
    // eslint-disable-next-line react/prop-types
    render: ({ name, tags = {} }) => <Name deprecated={!!tags.deprecated}>{`${name}()`}</Name>,
  },
  {
    caption: 'Parameters',
    // eslint-disable-next-line react/prop-types
    render: ({ params = [] }) => <Arguments args={params} />,
  },
  {
    caption: 'Description',
    // eslint-disable-next-line react/prop-types
    render: ({ description, returns, tags = {} }) => (
      <div>
        {description && <Markdown text={description} />}
        {returns && <Argument block returns {...returns} />}
        <JsDoc {...tags} />
      </div>
    ),
  },
];

export default function MethodsRenderer({ methods }) {
  return <Table columns={columns} rows={methods} getRowKey={getRowKey} />;
}

MethodsRenderer.propTypes = {
  methods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    returns: PropTypes.object,
    params: PropTypes.array,
    tags: PropTypes.object,
  })).isRequired,
};
