import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  bodyType: 'mdx',
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    draft: { type: 'boolean' }
  },
  computedFields
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  bodyType: 'mdx',
  filePathPattern: '*.mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
})
