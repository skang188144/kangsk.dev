import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
