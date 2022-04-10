import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("env", process.env.NODE_ENV);
  return <Component {...pageProps} />;
}

export default MyApp;
