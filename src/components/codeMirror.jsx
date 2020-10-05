import {UnControlled as CodeMirror} from 'react-codemirror2';

import React, { Component }  from 'react';

export default class Code extends Component {
  render() {
    return (
      <div style={{height: "400px", width: "300px" }}>
        <CodeMirror
          value='fetch(https://hello.com)
          .then(data => console.log(data))'
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </div>
    );
  }
}
