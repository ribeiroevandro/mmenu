import { useState } from 'react'
import Home from '~/components/Home'
import Layout from '~/components/Layout'
import Modal from '~/components/Modal'
import ProductItem, { ProductItemProps } from '~/components/ProductItem'
import Products from '~/components/Products'
import { useCart } from '~/hooks/cart'

const importProducts = async () => {

  const markdownFiles = require
    .context('~/content/products', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`~/content/products/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}


const Index = ({ productsList }) => {
  const { isModal, openModal } = useCart()
  const [selected, setSelected] = useState<ProductItemProps>({} as ProductItemProps)

  return (
    <Layout metas={{
      title: 'O jeito mais fácil de pedir delivery de comida. A maior lista de restaurantes online em sua cidade. Faça seu pedido pela internet e receba em casa.',
      url: '',
      image: '/static/cover.png'
    }}>
      <Products>
        {productsList
          .filter((item) => item.attributes.home_page)
          .map((item) => (
          <ProductItem key={item.slug} data={item} update={setSelected} modalActived />
        ))}
      </Products>
      <Modal
        isOpen={isModal}
        onClickClose={() => {
          openModal()
          setSelected({} as ProductItemProps)
        }}
        component={() => <ProductItem data={selected}  modalActived={false} />}
      />
    </Layout>
  )
}
export async function getStaticProps() {
  const productsList = await importProducts()

  return {
    props: {
      productsList,
    },
  }
}

export default Index
