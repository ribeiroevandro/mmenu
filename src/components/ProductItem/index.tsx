import { BiLinkExternal } from "react-icons/bi";
import { useCart } from "~/hooks/cart";
import Modal from "~/components/Modal";

import * as S from './styles'

interface ProductItemProps {
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
  data: ProductItemProps
}

const ProductItem = ({ data }: Props) => {
  const { isModal, openModal } = useCart()

  return (
    <>
      <S.Container onClick={openModal}>
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
      <Modal isOpen={isModal} onClickClose={openModal}>
        <h1>teste</h1>
      </Modal>
    </>
  )
}

export default ProductItem
