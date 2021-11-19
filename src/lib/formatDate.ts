import { format } from 'date-fns'

export enum DateFormat {
  PostLong = 'PPP',
  PostShort = 'P',
  PostList = 'yyy-MM-dd'
}

export function formatDate(
  date: string | Date,
  template = DateFormat.PostLong
): string {
  if (typeof date === 'string') {
    return format(new Date(date), template)
  }

  return format(date, template)
}
