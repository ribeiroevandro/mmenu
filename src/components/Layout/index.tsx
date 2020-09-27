import Link from 'next/link'

import * as S from './styles'

const Layout = ({ children }) => (
  <>
    <S.Nav>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Cardápio</a>
          </Link>
        </li>
      </ul>
    </S.Nav>
    <S.Container>{children}</S.Container>
  </>
)

export default Layout
