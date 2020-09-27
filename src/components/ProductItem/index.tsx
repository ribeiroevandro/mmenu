import * as S from './styles'

interface ProductItemProps {
  slug: string;
  attributes: {
    title: string;
    date: string;
    thumbnail_featured: string;
    price: number;
  }
}

interface Props {
  data: ProductItemProps
}

const ProductItem = ({ data }: Props) => {

  return (
    <S.Container>
      <div>
        <h1>{data.attributes.title}</h1>
        <p>
          {data.attributes.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
      <figure>
        <img src={data.attributes.thumbnail_featured} alt={data.attributes.title} />
      </figure>
    </S.Container>
  )
}

export default ProductItem
