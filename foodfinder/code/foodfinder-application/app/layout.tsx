// app/layout.tsx
import "./globals.css";
import "../styles/layout.css";
import  SessionProviderWrapper  from "components/session-provider-wrapper";
import Layout from "components/layout";

export const metadata = {
  title: 'Food Finder',
  description: 'Find your favorite food locations',
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
        <Layout>
          {children}
        </Layout>
        </SessionProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
