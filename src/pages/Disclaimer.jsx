import Header from "../components/Header"
import { Footer } from "../components/Footer"

export const Disclaimer = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="page-title">Disclaimer</h2>
        <div className="disclaimer">
          <p>
            This website was created as an full-stack web development exercise. It is made of three parts:
            <ul>
              <li>an API to manage and serve the content (built with Express and MongoDB) ;</li>
              <li>a CMS website to create and edit content (built with React) ;</li>
              <li>a client (this website) to view and interact with the content (built with React).</li>
            </ul>
          </p>
          <p>
            Articles are written using ChatGPT.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}