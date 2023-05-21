import Index from "@/components/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="md:px-[60px] lg:px-[150px]">
      <Index />
      <Component {...pageProps} />
    </div>
  );
}
