import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'

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
          <h2>teste</h2>
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
          <p>Compartilhe nas redes sociais</p>
          <ul>
            <li>
              <FacebookShareButton
                url={`https://mmenu-cms.netlify.app/products/item/${data.slug}`}
                quote={data.attributes.title}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url={`https://mmenu-cms.netlify.app/products/item/${data.slug}`}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </li>
            <li>
              <WhatsappShareButton
                url={`https://mmenu-cms.netlify.app/products/item/${data.slug}`}
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </li>
          </ul>
        </footer>
      </S.Container>
    )
  )
}

export default ProductItem
