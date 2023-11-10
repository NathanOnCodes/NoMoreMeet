import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'NoMoreMeet',
  description: 'Calcule o valor de suas reuniões',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
          <header >
            <h1 className="text-3xl font-bold text-center mb-4 bg-gray-700 text-white p-3"> NoMoreMeet</h1>
          </header>
          <main>
          <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
            {children}
          </div>  
          </main>
      </body>
    </html>
  )
}
