'use client';
import MainLayout from '@/app/MainLayout';
import RecoilContextProvider from '@/contexts/RecoilContextProvider';
import { Inter } from "next/font/google";
import React from 'react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <RecoilContextProvider>
      <html lang="en" dir="ltr">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
        </head>
        <body suppressHydrationWarning>
          <MainLayout>
            {children}
          </MainLayout>
        </body>
      </html>
    </RecoilContextProvider>
  );
}
