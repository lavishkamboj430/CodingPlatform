import React from "react";
import { useSelector } from "react-redux";

const sidebarItems = [
  { label: "Home", active: true },
  { label: "My Projects" },
  { label: "Problems" },
  { label: "Settings" },
];

const codeLines = [
  "#include <iostream>",
  "using namespace std;",
  "",
  "int main() {",
  '  cout << "Hello, World!" << endl;',
  "  return 0;",
  "}",
];

const consoleLines = [
  { text: "$ g++ main.cpp && ./a.out" },
  { text: "Hello, World!" },
  { text: "Process exited with code", className: "mt-2" },
];

const SidebarItem = ({ label, active, Theme }) => {
  return (
    <div
      className={`cursor-pointer rounded-md px-3 py-2 text-sm ${
        active
          ? Theme
            ? "bg-zinc-900 text-white"
            : "bg-zinc-200 text-black"
          : Theme
          ? "text-zinc-500 hover:bg-zinc-900 hover:text-white"
          : "text-zinc-600 hover:bg-zinc-200 hover:text-black"
      }`}
    >
      {label}
    </div>
  );
};

const CodeLine = ({ number, code, Theme }) => {
  return (
    <div className="flex">
      <span
        className={`w-8 select-none ${
          Theme ? "text-zinc-600" : "text-zinc-400"
        }`}
      >
        {number}
      </span>

      <span>{code || "\u00A0"}</span>
    </div>
  );
};

const ConsoleLine = ({ text, className = "", Theme }) => {
  return (
    <p
      className={`${className} ${
        Theme ? "text-zinc-400" : "text-zinc-600"
      }`}
    >
      {text}
    </p>
  );
};

const CodeEditor = () => {
  const Theme = useSelector((state) => state.Theme.Theme)
  return (
    <div
  className={`mx-auto max-w-4xl overflow-hidden rounded-xl border relative z-0 ${
    Theme
      ? "border-zinc-800 bg-zinc-950 text-white"
      : "border-zinc-300 bg-zinc-100 text-zinc-900"
  }`}
>
      <div className="flex flex-wrap">

        {/* Sidebar */}
        <div
  className={`w-[180px] flex-shrink-0 space-y-1 border-r p-4 ${
    Theme
      ? "border-zinc-900 bg-zinc-950"
      : "border-zinc-300 bg-zinc-100"
  }`}
>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              active={item.active}
              Theme={Theme}
            />
          ))}
        </div>

        {/* Code Editor */}
        <div
          className={`min-w-[280px] flex-1 border-r ${
            Theme
              ? "border-zinc-900"
              : "border-zinc-200"
          }`}
        >
          {/* Editor Header */}
          <div
  className={`flex items-center justify-between border-b px-4 py-2.5 text-xs ${
    Theme
      ? "border-zinc-900"
      : "border-zinc-300"
  }`}
>
            <span
  className={`rounded px-3 py-1 ${
    Theme
      ? "bg-zinc-900 text-zinc-300"
      : "bg-zinc-200 text-zinc-700"
  }`}
>

              main.cpp
            </span>

          <button
  className={`rounded px-3 py-1 font-medium ${
    Theme
      ? "bg-white text-black hover:bg-zinc-200 cursor-pointer"
      : "bg-zinc-900 text-white hover:bg-black cursor-pointer"
  }`}
>

              ▶ Run
            </button>
          </div>

          {/* Code */}
       <div
  className={`overflow-x-auto p-4 font-mono text-[13px] leading-6 ${
    Theme
      ? "text-zinc-300"
      : "text-zinc-700"
  }`}
>
            {codeLines.map((line, index) => (
              <CodeLine
                key={index}
                number={index + 1}
                code={line}
                Theme={Theme}
              />
            ))}
          </div>
        </div>

        {/* Console */}
        <div className="w-full flex-shrink-0 sm:w-[240px]">

          {/* Console Header */}
          <div
  className={`p-4 font-mono text-[12px] leading-6 ${
    Theme
      ? "text-zinc-400"
      : "text-zinc-600"
  }`}
>
            Console
          </div>

          {/* Console Content */}
          <div
            className={`p-4 font-mono text-[12px] leading-6 ${
              Theme
                ? "text-zinc-400"
                : "text-zinc-600"
            }`}
          >
            {consoleLines.map((line, index) => (
              <ConsoleLine
                key={index}
                text={line.text}
                className={line.className}
                Theme={Theme}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CodeEditor;