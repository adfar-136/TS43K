import React from 'react'

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        {children}
      <h1>Root Layout component</h1>
      </body>
      
    </html>
  )
}
