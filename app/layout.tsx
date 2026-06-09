import Link from "next/link"
export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return (
    <html lang = "eng">
    <body>
<nav>
  <Link href = "/"> Home</Link>
  {" | "}
  <Link href= "/notes"> Notes</Link>
  {" | "}
  <Link href = "/notes/new"> Create New</Link>
  {" | "}
  <Link href= "/users"> Users</Link>
</nav>

  {children}
    </body>
    </html>
  )
}