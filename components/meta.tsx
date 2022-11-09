import Head from 'next/head'
import { useThemeUI } from 'theme-ui'
import type { PropsWithChildren } from 'react'

const makeTitle = (title: string, name: string) =>
  title === name ? title : `${title} – ${name}`

interface Props extends PropsWithChildren<any> {
  title?: string
  name?: string
  description?: string
  image?: string
  url?: string
}

function Meta({
  title = 'Theme Starter', // page title
  name = 'Theme Starter', // site name
  description = 'This website was bootstrapped with @lachlanjc’s Next.js Theme Starter.', // page description
  image = '', // social card image URL
  url = 'https://next-theme-starter.vercel.app',
  children,
}: Props) {
  const { theme } = useThemeUI()
  const primary = theme.colors?.primary as string
  return (
    <Head>
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={name} />
      <title key="title">{makeTitle(title, name)}</title>
      <meta
        key="og_title"
        property="og:title"
        content={makeTitle(title, name)}
      />
      <meta
        key="tw_title"
        name="twitter:title"
        content={makeTitle(title, name)}
      />
      {description && (
        <>
          <meta key="desc" name="description" content={description} />
          <meta key="og_desc" property="og:description" content={description} />
          <meta
            key="tw_desc"
            name="twitter:description"
            content={description}
          />
        </>
      )}
      {image && (
        <>
          <meta key="og_img" property="og:image" content={image} />
          <meta
            key="tw_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta key="tw_img" name="twitter:image" content={image} />
        </>
      )}
      <meta key="theme_color" name="theme-color" content={primary} />
      <meta key="tile_color" name="msapplication-TileColor" content={primary} />
      <link
        key="apple_icon"
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${url}/apple-touch-icon.png`}
      />
      <link
        key="favicon_32"
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${url}/favicon-32x32.png`}
      />
      <link
        key="favicon_16"
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${url}/favicon-16x16.png`}
      />
      {/* <link key="manifest" rel="manifest" href={`${url}/site.webmanifest`} /> */}
      {children}
    </Head>
  )
}

export default Meta
