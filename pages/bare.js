// Theirs
import React from "react";

// Ours
import Carbon from "../components/Carbon";
import {
  COLORS,
  DEFAULT_CODE
} from '../lib/constants'

class Bare extends React.Component {
  render() {
    return (
      <div>
        <div id="editor">
          <Carbon config={{}}>{DEFAULT_CODE}</Carbon>
        </div>
        <style jsx>
          {`
            #editor {
              background: ${COLORS.BLACK};
              border: 3px solid ${COLORS.SECONDARY};
              border-radius: 8px;
              padding: 16px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Bare;
