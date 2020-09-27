import Link from 'next/link'
import Layout from '~/components/Layout'
import ProductItem from '~/components/ProductItem'
import Products from '~/components/Products'

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

const Product = ({ productsList }) => (
  <Layout>
    <Products>
      {productsList.map((item) => (
        <ProductItem key={item.slug} data={item} />
      ))}
    </Products>
  </Layout>
)

export async function getStaticProps() {
  const productsList = await importProducts()

  return {
    props: {
      productsList,
    },
  }
}

export default Product
