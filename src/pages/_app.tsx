import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AuthProvider } from "@/context/useAuth";

import "@/styles/globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <AuthProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </Theme>
    </>
  );
}
