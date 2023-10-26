import HeaderComponent from '@/components/HeaderComponent'
import '@/public/styles/main.scss'


export const metadata = {
  title: 'Bigtank Nextjs 13 Boilerplate',
  description: 'Made by the bigtank',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        {children}
      </body>
    </html>
  )
}
