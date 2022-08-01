import { ProjectModel } from '~/features/projects/types'

export const projects: ProjectModel[] = [
  {
    title: 'Sbotify',
    description: 'Spotify clone built with TypeScript, Next.js and Prisma',
    createdAt: new Date(2022, 7, 1),
    demoUrl: 'https://sbotify-clone.vercel.app',
    sourceUrl: 'https://github.com/dennis-kurochkin/spotify-clone',
  },
  {
    title: 'Gucagen',
    description: 'A tool for generating Google Calendar events with ease, built with Next.js',
    createdAt: new Date(2021, 8, 1),
    demoUrl: 'https://google-calendar-link-generator.vercel.app/',
    sourceUrl: 'https://github.com/dennis-kurochkin/google-calendar-link-generator',
  },
  {
    title: 'kurochkin.dev',
    description: 'The source of this website',
    createdAt: new Date(2020, 12, 1),
    sourceUrl: 'https://github.com/dennis-kurochkin/dennis-kurochkin.github.io',
  },
]
