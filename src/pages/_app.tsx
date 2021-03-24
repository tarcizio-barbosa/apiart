import Logo from '../components/Logo';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Logo>
      <Component {...pageProps} />
    </Logo>
  );
}

export default MyApp;
