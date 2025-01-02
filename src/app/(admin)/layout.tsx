import "../globals.css";



export const metadata = {
  title: 'Comforty Studio',
  description: 'Comforty Studio Generated by S. M. Shan-e-Ali',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
    
        {children}
      </body>
    </html>
  )
}
