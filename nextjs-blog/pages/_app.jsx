import './../styles/globals.css';
import App from 'next/app'
const uriCards = 'http://localhost:1337/api/posts?populate=*'
const domain = 'http://localhost:1337'

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