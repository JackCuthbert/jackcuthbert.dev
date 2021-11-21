import { NextPage } from 'next'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

/** Alias for the props available to <a /> */
export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export type GetLayout = (page: JSX.Element | WithLayout) => JSX.Element | null

export type WithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout
}
