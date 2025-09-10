import './globals.css'; // Tailwind CSS

export const metadata = {
  title: 'Inventory App',
  description: 'Next.js + Firebase Inventory System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
