import React from 'react';
import PropTypes from 'prop-types';
import Pre from 'bootstrap-styled/lib/Pre';
import P from 'bootstrap-styled/lib/P';
import A from 'bootstrap-styled/lib/A';

export function ErrorRenderer({ error, info }) {
  return (
    <div>
      <Pre>
        {error.toString()}
        {info.componentStack.toString()}
      </Pre>
      <div>
        <P>
          This may be due to an error in a component you are overriding, or a bug in React
          Styleguidist.
        </P>
        <P>
          If you believe this is a bug,&nbsp;
          <A
            style={{ color: 'inherit' }}
            href="https://github.com/styleguidist/react-styleguidist/issues"
          >
            please submit an issue
          </A>.
        </P>
      </div>
    </div>
  );
}

ErrorRenderer.propTypes = {
  error: PropTypes.object.isRequired,
  info: PropTypes.shape({
    componentStack: PropTypes.any.isRequired,
  }).isRequired,
};

export default ErrorRenderer;
