import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NoMoreMeet",
  description: "Calcule o valor de suas reuniões",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <div className="flex-row text-sm font-bold flex gap-8 mb-4 bg-gray-700 text-white p-3">
           <Link href={'/'}> <h1 className="text-4xl hover:text-black font-bold mb-4">NoMoreMeet</h1> </Link>
            <ul className="w-4/5 flex p-2 justify-end gap-6 text-lg align-middle">
              <Link href={"/form"}>
                <li className="hover:text-black"> Calculadora </li>
              </Link>
              <Link href="/meets"> <li className="hover:text-black"> Resultados </li> </Link>
            </ul>
          </div>
        </header>
        <main>
          <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
