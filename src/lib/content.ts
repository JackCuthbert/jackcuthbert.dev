import * as path from 'path'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import type { MdxRemote } from 'next-mdx-remote/types'

const root = path.join(process.cwd(), 'content')

type ContentType = 'blog'

export interface FrontMatter {
  title: string
  date: Date
  slug: string
}

export interface PostData {
  frontMatter: FrontMatter
  mdxSource: MdxRemote.Source
}

function isBool(val: any): val is boolean {
  return val !== undefined && typeof val === 'boolean'
}

export function getFiles(type: ContentType): string[] {
  return readdirSync(path.join(root, type))
}

export function getSlugs(type: ContentType): string[] {
  const files = getFiles(type)
  return files.map(p => p.replace(/(\.mdx|\.md)/, ''))
}

export async function getFileBySlug(
  type: ContentType,
  slug?: string
): Promise<PostData> {
  const source =
    slug !== undefined
      ? readFileSync(path.join(root, type, slug + '.mdx'), 'utf8')
      : readFileSync(path.join(root, type, `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content)

  return {
    mdxSource,
    frontMatter: data as any
  }
}

export function getAllFilesFrontMatter(type: ContentType): FrontMatter[] {
  const files = getFiles(type)

  const frontMatter = files.reduce<FrontMatter[]>((arr, fileName) => {
    const source = readFileSync(path.join(root, type, fileName))
    const { data } = matter(source)

    if (isBool(data.draft) && data.draft) return arr

    arr.push({
      title: data.title,
      date: data.date,
      slug: data.slug ?? fileName.replace(/(\.mdx|\.md)/, '')
    })

    return arr
  }, [])

  return frontMatter
}
