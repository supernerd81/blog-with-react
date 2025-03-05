import './css/App.css'
import Header from './modules/Header.tsx';
import Blog from "./sites/Blog.tsx";
import Footer from "./modules/Footer.tsx";
import Button from "./utils/Button.tsx";

export default function App() {

const buttons = [
    <Button onClick={() => console.log("Home Button")} btName="home" text="Home" />,
    <Button onClick={() => console.log("Blog Button")} btName="blog" text="Blog" />,
    <Button onClick={() => console.log("Kontakt Button")} btName="kontakt" text="Kontakt" />
    ]

  return (
      <>
        <Header buttons={buttons} />
        <Blog/>
        <Footer/>
      </>
  )
}
