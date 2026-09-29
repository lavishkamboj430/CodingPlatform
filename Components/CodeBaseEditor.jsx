import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useSelector } from "react-redux";

const LANGUAGES = [
  { id: "cpp", label: "C++", icon: "cpp" },
  { id: "python", label: "Python", icon: "py" },
  { id: "javascript", label: "JavaScript", icon: "js" },
  { id: "java", label: "Java", icon: "java" },
];

const DEFAULT_CODE = {
  cpp: `// Welcome back to CodeBase
// Write. Run. Build.

#include <iostream>
using namespace std;

int main() {
    cout << "Welcome back to CodeBase!" << endl;
    return 0;
}`,

  python: `# Welcome back to CodeBase
# Write. Run. Build.

def main():
    print("Welcome back to CodeBase!")

if __name__ == "__main__":
    main()`,

  javascript: `// Welcome back to CodeBase
// Write. Run. Build.

function main() {
    console.log("Welcome back to CodeBase!");
}

main();`,

  java: `// Welcome back to CodeBase
// Write. Run. Build.

public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome back to CodeBase!");
    }
}`
};

export default function CodeBaseEditor() {

  const Theme   = useSelector((state)=>state.Theme.Theme)
  const [language, setlanguage] = useState("javascript");
  const [value, setValue] = useState(DEFAULT_CODE[language]);
  const [ShowHideTerminal, setShowHideTerminal] = useState(false);
  const [terminalLines, setTerminalLines] = useState([
    "> python main.py",
  ]);
  const [cursor, setCursor] = useState({ line: 1, col: 1 });

  function onMount(editor) {
    editor.onDidChangeCursorPosition((e) => {
      setCursor({ line: e.position.lineNumber, col: e.position.column });
    });
  }

  function handleRun() {
    setShowHideTerminal(true)
    // setTerminalLines((lines) => [...lines, "> python main.py", "Running..."]);
  }
console.log(value)
  return (
    
    <div className="cn-shell">
      {/* Top nav */}
      {/* <header className="cn-topbar">
        <div className="cn-brand">
          <span className="cn-brand-mark">{"</>"}</span>
          <span className="cn-brand-name">CodeBase</span>
        </div>
        <nav className="cn-nav">
          <a className="cn-nav-item cn-nav-item--active" href="#editor">
            <span className="cn-nav-icon">{"</>"}</span> Editor
          </a>
          <a className="cn-nav-item" href="#projects">
            Projects
          </a>
          <a className="cn-nav-item" href="#learn">
            Learn
          </a>
          <a className="cn-nav-item" href="#community">
            Community
          </a>
        </nav>
        <div className="cn-topbar-icons">
          <button className="cn-icon-btn" aria-label="Search">
            ⌕
          </button>
          <button className="cn-icon-btn" aria-label="Toggle theme">
            ☀
          </button>
          <button className="cn-icon-btn cn-icon-btn--round" aria-label="Account">
            ☺
          </button>
        </div>
      </header> */}

      <div className="cn-body">
        {/* Sidebar */}
        {/* <aside className="cn-sidebar">
          <button className="cn-sidebar-primary">
            <span>+</span> New File
          </button>
          <button className="cn-sidebar-item">
            <span className="cn-sidebar-item-icon">▤</span> Open File
          </button>
          <button className="cn-sidebar-item">
            <span className="cn-sidebar-item-icon">▾</span> Save
          </button>
          <button className="cn-sidebar-item" onClick={handleRun}>
            <span className="cn-sidebar-item-icon">▷</span> Run
          </button>

          <div className="cn-sidebar-label">Languages</div>
          <ul className="cn-lang-list">
            {LANGUAGES.map((lang) => (
              <li key={lang.id} className="cn-lang-item">
                <span className={`cn-lang-dot cn-lang-dot--${lang.icon}`} />
                {lang.label}
              </li>
            ))}
          </ul>
        </aside> */}

        {/* Main content */}
        <main className="cn-main">
          <div className="cn-panels">
            {/* Editor panel */}
            <section className="cn-panel cn-panel--editor">
              <div className="cn-tabbar">
                <div className="cn-tab cn-tab">
                  {/* <span className="cn-tab-dot" />
                  main.py
                  <span className="cn-tab-close">×</span> */}
                </div>
                {/* <button className="cn-tab-add" aria-label="New tab">
                  +
                </button> */}
              </div>

              <div className="cn-editor-wrap">
                <Editor
                  height="100%"
                  defaultLanguage={language}
                  defaultValue={DEFAULT_CODE[language]}
                  value={value}
                  onChange={(val) => setValue(val)}
                  theme={Theme?"vs-dark":""}
                  onMount={onMount}
                  options={{
                    fontSize: 14,
                    fontFamily:
                      "'JetBrains Mono', 'Fira Code', Menlo, monospace",
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    padding: { top: 16 },
                  }}
                />
              </div>

              <div className="cn-statusbar">
                <span>{language}3.11.0</span>
                <span className="cn-statusbar-spacer" />
                <span>
                  Ln {cursor.line}, Col {cursor.col}
                </span>
                <span>Spaces: 4</span>
                <span>UTF-8</span>
              </div>
            </section>

            {/* Terminal panel */}
            {ShowHideTerminal ? <section className="cn-panel cn-panel--terminal">
              <div className="cn-terminal-header">
                <span className="cn-terminal-title">
                  <span className="cn-terminal-icon">{">_"}</span> Terminal
                </span>
                <div className="cn-terminal-actions">
                  <button className="cn-text-btn" onClick={() => setShowHideTerminal(false)}>🗑 </button>
                  {/* <button className="cn-icon-btn" aria-label="Expand">
                    ⤢
                  </button> */}
                </div>
              </div>
              <div className="cn-terminal-body">
                {terminalLines.map((line, i) => (
                  <div key={i} className="cn-terminal-line">
                    {line}
                  </div>
                ))}
                <div className="cn-terminal-line cn-terminal-cursor">
                  <span>&gt;</span>
                  <span className="cn-caret" />
                </div>
              </div>
            </section> : ""}
          </div>

          {/* Quick actions */}
          <div className="cn-quickactions">
            <div className="cn-quickactions-title">Quick Actions</div>
            <div className="cn-quickactions-row">
              <button className="cn-quickaction" onClick={handleRun}>
                <span className="cn-quickaction-icon">▷</span>
                <span>
                  <strong>Run Code</strong>
                  <small>Execute your program</small>
                </span>
              </button>
              <button className="cn-quickaction">
                <span className="cn-quickaction-icon">▾</span>
                <span>
                  <strong>Save Project</strong>
                  <small>Save your progress</small>
                </span>
              </button>
              <button className="cn-quickaction">
                <span className="cn-quickaction-icon">▤</span>
                <span>
                  <strong>Open Project</strong>
                  <small>Load existing project</small>
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}