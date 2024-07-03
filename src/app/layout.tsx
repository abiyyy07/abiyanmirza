'use client'

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="2jM4SwYtS5m56CMbgJbFN3b3T_nRzHmF_Rabrlxs1xA" />
      </head>
      <body>{children}</body>
    </html>
  );
}
