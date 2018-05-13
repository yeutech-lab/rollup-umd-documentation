import React from 'react';
import Code from 'bootstrap-styled/lib/Code';

export function CodeRenderer({ className, children }) {
  const isHighlighted = className && className.indexOf('lang-') !== -1;
  if (isHighlighted) {
    return <Code className={className} dangerouslySetInnerHTML={{ __html: children }} />;
  }
  return <Code className={className}>{children}</Code>;
}

export default CodeRenderer;
