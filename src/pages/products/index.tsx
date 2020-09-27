import Link from 'next/link'
import { useState } from 'react'
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

const Product = ({ productsList }) => {
  const { isModal, openModal } = useCart()
  const [selected, setSelected] = useState<ProductItemProps>({} as ProductItemProps)

  return (
    <Layout metas={{
      title: 'Cardápio',
      image: '/static/img/cover.png',
      description: 'teste'
    }}>
      <Products>
        {productsList.map((item) => (
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

export default Product
