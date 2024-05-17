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
    title: "FullMovies",
    description:
      "Explorador de peliculas y series. Encuentra toda la informacion  de la pelicula o serie que buscas",
    url: "https://page-movies-soria-iacc-hotmailcom-carlos-projects-5e31a4ed.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dtlchh1km/image/upload/v1715890116/captura-pantalla_gaqufb.png",
        width: 600,
        height: 400,
      },
    ],
    site_name: "FullMovies",
    type: "website",
  },
  additionalMetaTags: [
    {
      property: "fb:app_id",
      content: "928977633900253",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dtlchh1km/image/upload/v1715891210/png-transparent-logo-brand-com-student-creative-slate-text-logo-film_jneyny.png"
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
