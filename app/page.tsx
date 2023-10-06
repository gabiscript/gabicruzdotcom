import "./styles/global.css";
import Header from "./components/Header/header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Header />
    </main>
  )
}
