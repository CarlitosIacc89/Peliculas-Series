import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";
import Provider from "@/context/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FullMovies",
  description: "Explorador de peliculas y series",
  author: "Carlos Soria",
  keywords: "pelicula, serie, terror, accion",
  openGraph: {
    title: "Explorador de peliculas y series",
    description:
      "Encuentra toda la informacion  de la pelicula o serie que buscas",
    images: [
      {
        url: "http://localhost:3000/captura-pantalla.png",
        width: 600,
        height: 400,
      },
    ],
    site_name: "FullMovies",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="http://localhost:3000/image-logo.jpg"
          type="image/x-icon"
          className="rounded-full"
        />
      </head>
      <body className={inter.className}>
        <Provider>
          <Headers />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
