import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://savingsday.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/hostinger/sitemap.xml`,
    ],
  }
}
