import LinkWrapper from 'components/LinkWrapper'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseCircleOutline size={32} aria-label="Voltar" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Contaniner>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => {
              return (
                <img key={`photo-${index}`} src={image.url} alt={place.name} />
              )
            })}
          </S.Gallery>
        </S.Contaniner>
      </S.Wrapper>
    </>
  )
}
