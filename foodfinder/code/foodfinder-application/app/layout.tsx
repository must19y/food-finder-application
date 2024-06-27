// app/layout.tsx
import "./globals.css";
import "../styles/layout.css";
import Layout from "components/layout";

export const metadata = {
  title: 'Food Finder',
  description: 'Find your favorite food locations',
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
