import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.SITE_URL!}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}
