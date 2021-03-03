import React from 'react'
import cntl from 'cntl'
import { CustomLink } from './CustomLink'

const wrapCN = cntl`
  flex
  space-x-1

  px-4
  py-2
  rounded-sm

  border
  border-gray-200
  bg-white

  group
  transition

  hover:bg-purple-50
  hover:border-purple-300
  hover:shadow
`

const projectNameCN = cntl`
  font-semibold

  transition
  group-hover:text-purple-900
`

const projectSummaryCN = cntl`
  text-gray-500
`

const arrowCN = cntl`
  text-gray-400

  transition
  group-hover:text-purple-500
`

interface Props {
  name: string
  summary: string
  url: string
}

export function Project({ name, summary, url }: Props): JSX.Element {
  return (
    <CustomLink href={url} target="_blank" className={wrapCN}>
      <div className="flex-grow">
        <p className={projectNameCN}>{name}</p>
        <p className={projectSummaryCN}>{summary}</p>
      </div>
      <span className={arrowCN}>🡥</span>
    </CustomLink>
  )
}
