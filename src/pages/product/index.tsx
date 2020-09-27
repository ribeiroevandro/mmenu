import Link from 'next/link'
import Layout from '~/components/Layout'

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
    {productsList.map((item) => (
      <div key={item.slug} className="item">
        <Link href="/product/item/[slug]" as={`/product/item/${item.slug}`}>
          <a>
            <img src={item.attributes.thumbnail} />
            <h2>{item.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
    <style jsx>{`
      .post {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
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
