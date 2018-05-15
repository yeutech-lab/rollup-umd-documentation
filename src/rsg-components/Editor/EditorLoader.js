import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import EditorLoaderRenderer from './EditorLoaderRenderer'; // eslint-disable-line no-unused-vars

export default class EditorLoader extends Component {
  state = {
    editor: null,
  };

  componentDidMount() {
    import('./Editor').then((module) => {
      this.setState({ editor: module.default });
    });
  }

  render() {
    const Editor = this.state.editor;
    if (Editor) {
      return <Editor {...this.props} />;
    }

    return <EditorLoaderRenderer />;
  }
}
