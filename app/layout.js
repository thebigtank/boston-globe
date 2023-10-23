import '@/public/styles/main.scss'

export const metadata = {
  title: 'Bigtank Nextjs 13 Boilerplate',
  description: 'Made by the bigtank',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
