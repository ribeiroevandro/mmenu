import * as S from './styles'

interface ProductItemProps {
  slug: string;
  attributes: {
    title: string;
    date: string;
    thumbnail: string;
  }
}

interface Props {
  data: ProductItemProps
}

const ProductItem = ({ data }: Props) => (
  <S.Container>
    <img src={data.attributes.thumbnail} alt={data.attributes.title}/>
    <h1>{data.attributes.title}</h1>
  </S.Container>
)

export default ProductItem
