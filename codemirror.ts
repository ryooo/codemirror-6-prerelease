export {EditorView, keymap, highlightSpecialChars, drawSelection, indentOnInput} from "./codemirror.next/view/src"
export {Extension, EditorState} from "./codemirror.next/state/src"
export {history, historyKeymap} from "./codemirror.next/history/src/history"
export {foldGutter, foldKeymap} from "./codemirror.next/fold/src/fold"
export {lineNumbers} from "./codemirror.next/gutter/src"
export {defaultKeymap} from "./codemirror.next/commands/src/commands"
export {bracketMatching} from "./codemirror.next/matchbrackets/src/matchbrackets"
export {closeBrackets, closeBracketsKeymap} from "./codemirror.next/closebrackets/src/closebrackets"
export {searchKeymap} from "./codemirror.next/search/src/search"
export {autocompletion, completionKeymap} from "./codemirror.next/autocomplete/src"
export {commentKeymap} from "./codemirror.next/comment/src/comment"
export {rectangularSelection} from "./codemirror.next/rectangular-selection/src/rectangular-selection"
export {gotoLineKeymap} from "./codemirror.next/goto-line/src/goto-line"
export {highlightActiveLine, highlightSelectionMatches} from "./codemirror.next/highlight-selection/src/highlight-selection"
export {defaultHighlightStyle} from "./codemirror.next/highlight/src/highlight"
export {lintKeymap} from "./codemirror.next/lint/src/lint"


export {cpp} from "./codemirror.next/lang-cpp/src/cpp"
export {css} from "./codemirror.next/lang-css/src/css"
export {html} from "./codemirror.next/lang-html/src/html"
export {java} from "./codemirror.next/lang-java/src/java"
export {javascript} from "./codemirror.next/lang-javascript/src/javascript"
export {json} from "./codemirror.next/lang-json/src/json"
export {python} from "./codemirror.next/lang-python/src/python"
export {rust} from "./codemirror.next/lang-rust/src/rust"
//export {sql} from "./codemirror.next/lang-sql/src/sql"
export {xml} from "./codemirror.next/lang-xml/src/xml"


export const basicSetup: Extension = [
  lineNumbers(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  defaultHighlightStyle,
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...commentKeymap,
    ...gotoLineKeymap,
    ...completionKeymap,
    ...lintKeymap
  ])
]
