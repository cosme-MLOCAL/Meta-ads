import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { LenisProvider } from './LenisProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gabriel Arquitectura — Diseño con propósito',
    template: '%s | Gabriel Arquitectura',
  },
  description:
    'Estudio de arquitectura contemporánea en Madrid y Barcelona. Proyectos residenciales, comerciales y de rehabilitación con identidad propia.',
  keywords: ['arquitectura', 'estudio arquitectura', 'arquitecto Madrid', 'arquitecto Barcelona'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Gabriel Arquitectura',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <LenisProvider>
          <NoiseOverlay />
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
