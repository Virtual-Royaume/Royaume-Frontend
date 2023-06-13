import { Metadata } from "next";

const data = {
  title: "Le Royaume - Discord communautaire pour les développeurs",
  description: "Le Royaume est une communauté où règne la bonne humeur ! Composée principalement de développeurs, nous sommes la pour vous aider à évoluer dans les domaines qui vous intéressent.",
  siteName: "Le Royaume"
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  applicationName: data.siteName,

  themeColor: "#5339DD",
  
  openGraph: {
    title: data.title,
    description: data.description,
    siteName: data.siteName,
    url: "https://www.royaume.world",
    type: "website"
  },

  twitter: {
    title: data.title,
    description: data.description
  }
};