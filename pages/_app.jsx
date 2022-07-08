import './../styles/globals.css';
import App from 'next/app'
const uriCards = 'http://13.38.8.44/api/posts?populate=*'
const domain = 'http://13.38.8.44'

const MyApp = ({ Component, pageProps, data }) => {
  return (
    <Component {...pageProps} />
  )
}

// Myapp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   const 
// }


export default MyApp