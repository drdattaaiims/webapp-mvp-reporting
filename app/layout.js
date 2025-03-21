import "./globals.css";

export const metadata = {
  title: "FlashRad.AI | Redefining Radiology Reporting with AI",
  description: "Dictate or type your findings—generate accurate reports in seconds. The most efficient radiology reporting tool for radiologists and residents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
