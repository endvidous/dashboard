import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Home",
    description: "Made by Henry@endvidous ",
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }