"use client";

import "highlight.js/styles/github-dark.css";

import type { Component } from "#/lib/utils/component";
import type { MDCodeProps } from "./md-code.type";
import { useEffect } from "react";
import hljs from "highlight.js";
import { clsx } from "clsx";

export const MDCode: Component<MDCodeProps> = ({ lang, value }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  // Styles :
  const styles = clsx("rounded", {
    [`language-${lang ?? ""}`]: lang
  });

  return (
    <pre>
      <code className={clsx(styles, "whitespace-pre-wrap")}>{value}</code>
    </pre>
  );
};