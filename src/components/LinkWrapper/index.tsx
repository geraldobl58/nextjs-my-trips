import Link from 'next/link'
import * as S from './styles'

type LinkWrapperWrapper = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperWrapper) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
