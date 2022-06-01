import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function Editor({ customQuery, setCustomQuery }) {
  return (
    <div className="codeEditor">
      <AceEditor
        placeholder="# write your query here"
        mode="mysql"
        theme="monokai"
        name="sqlEditor"
        onChange={(changedVal) => {
          console.log("value:", changedVal);
          setCustomQuery(changedVal);
        }}
        fontSize={14}
        highlightActiveLine={true}
        value={customQuery}
        setOptions={{
          enableBasicAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
        height="200px"
        width="500px"
        wrapEnabled={true}
      />
    </div>
  );
}

export default Editor;
