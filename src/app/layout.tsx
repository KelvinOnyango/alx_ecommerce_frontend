// app/layout.tsx
"use client";

import { Provider } from "react-redux";
import { store } from "../store/index";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
