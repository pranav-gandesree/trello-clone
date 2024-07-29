
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div style={{ display: 'flex' }}>
    <Sidebar />
    <main style={{ flex: 1, padding: '20px' }}>
      {children} 
    </main>
   </div>
    </>
  );
}
