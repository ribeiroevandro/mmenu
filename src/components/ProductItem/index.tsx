import { BiLinkExternal } from "react-icons/bi";
import { useCart } from "~/hooks/cart";

import * as S from './styles'

export interface ProductItemProps {
  slug: string;
  attributes: {
    title: string;
    date: string;
    thumbnail_featured: string;
    price: number;
    description: string;
  }
}

interface Props {
  modalActived?: boolean;
  data: ProductItemProps;
  update?(item: ProductItemProps): void
}

const ProductItem = ({ data, modalActived, update }: Props) => {
  const { isModal, openModal } = useCart()

  return (
    modalActived ? (
      <S.Container onClick={() => {
        openModal()
        update(data)
      }}>
        <div>
          <h1>{data.attributes.title}</h1>
          <p>{data.attributes.description}</p>
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
    ) : (
      <S.Container modal={isModal}>
        <div>
          <h1>{data.attributes.title}</h1>
          <figure>
            <img src={data.attributes.thumbnail_featured} alt={data.attributes.title} />
          </figure>
          <p>{data.attributes.description}</p>
          <p>
            {data.attributes.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
        <footer>
          <ul>
            <li>
              <BiLinkExternal size={20} />
            </li>
          </ul>
        </footer>
      </S.Container>
    )
  )
}

export default ProductItem
