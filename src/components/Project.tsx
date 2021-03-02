import React from 'react'
import { CustomLink } from './CustomLink'

interface Props {
  name: string
  summary: string
  url: string
}

const hoverCN = [
  'border',
  'border-transparent',
  'bg-gray-100',
  'hover:bg-gray-200',
  'hover:border-gray-400',
  'transition'
].join(' ')

const wrapCN = [
  'flex',
  'items-center',
  'justify-between',
  'px-4',
  'py-2',
  'rounded-sm'
].join(' ')

export function Project({ name, summary, url }: Props): JSX.Element {
  return (
    <CustomLink href={url} target="_blank" className={`${wrapCN} ${hoverCN}`}>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500">{summary}</p>
      </div>
      <div className="text-gray-500">🡥</div>
    </CustomLink>
  )
}
