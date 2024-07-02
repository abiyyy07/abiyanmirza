import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/abiyan.jpg" />
      </head>
      <body className=''>{children}</body>
    </html>
  );
}
