import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';






export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="d-flex flex-column min-vh-100">

        <Navbar />

        {children}


        <Footer />
      </body>
    </html>
  )
}
