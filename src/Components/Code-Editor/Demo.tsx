"use client";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

export function DemoEditor() {
  const files = {
    "/index.html": {
      code: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React with Tailwind</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
    `.trim(),
    },
    "/App.js": {
      code: `
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Hello Tailwind!</h1>
    </div>
  );
}
    `.trim(),
    },
    "/index.js": {
      code: `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
    `.trim(),
    },
  };

  return (
    <div>
      <section>
        <SandpackProvider
          template="react"
          theme="dark"
          options={{ externalResources: ["https://cdn.tailwindcss.com"] }}
          files={files}
        >
          <SandpackLayout>
            <SandpackCodeEditor
              showTabs
              showLineNumbers={true}
              showInlineErrors
              wrapContent
              closableTabs
            />
            <SandpackPreview />
          </SandpackLayout>
        </SandpackProvider>
      </section>
    </div>
  );
}
