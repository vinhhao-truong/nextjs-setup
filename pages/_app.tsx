import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "../layouts/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}
