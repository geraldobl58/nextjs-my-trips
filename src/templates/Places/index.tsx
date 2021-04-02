import { NextSeo } from 'next-seo'
import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'Creating an interactive map with Nextjs, Graphql, and Graphicms'
        }
        canonical="https://nextjs-my-trips.vercel.app"
        openGraph={{
          url: 'https://nextjs-my-trips.vercel.app',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'Creating an interactive map with Nextjs, Graphql, and Graphicms',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseCircleOutline size={32} aria-label="Voltar" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Contaniner>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => {
              return (
                <Image
                  key={`photo-${index}`}
                  src={image.url}
                  alt={place.name}
                  width={1000}
                  height={600}
                  quality={75}
                />
              )
            })}
          </S.Gallery>
        </S.Contaniner>
      </S.Wrapper>
    </>
  )
}
