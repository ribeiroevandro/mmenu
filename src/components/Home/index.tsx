import { attributes } from '~/content/home.md'

import * as S from './styles'

const Home = () => (
    <S.Container>
        <h1>{attributes.title}</h1>
    </S.Container>
)

export default Home
