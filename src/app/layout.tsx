import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.jpeg" />
        <meta name="google-site-verification" content="2jM4SwYtS5m56CMbgJbFN3b3T_nRzHmF_Rabrlxs1xA" />
      </head>
      <body className=''>{children}</body>
    </html>
  );
}
