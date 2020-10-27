import Head from 'next/head'
import { FC } from 'react'

interface IRequiredProps {
  siteName: string
}

interface IOptionalProps {
  description: string
  image: string
  colour: string
}

export const Meta: FC<IRequiredProps & Partial<IOptionalProps>> = ({
  siteName,
  description,
  image,
  colour,
}) => {
  const site = `${siteName} • Statty`

  return (
    <Head>
      <title>{site}</title>

      <meta property='og:type' content='website' />
      <meta property='og:title' content={siteName} />
      <meta property='og:site_name' content='Statty' />

      {description && <meta property='og:description' content={description} />}
      {image && <meta property='og:image' content={image} />}
      {colour && <meta name='theme-color' content={colour} />}
    </Head>
  )
}
