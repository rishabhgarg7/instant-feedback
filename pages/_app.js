import '../styles/globals.css'
import '../src/css/tailwind.css'
import Layout from '../src/components/Layout/Layout'
import {AuthProvider} from '../src/lib/auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>

  )
}

export default MyApp
