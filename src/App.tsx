import './css/App.css'
import Header from './modules/Header.tsx';
import Blog from "./sites/Blog.tsx";
import Footer from "./modules/Footer.tsx";

export default function App() {

  return (
      <>
        <Header/>
        <Blog/>
        <Footer/>
      </>
  )
}
