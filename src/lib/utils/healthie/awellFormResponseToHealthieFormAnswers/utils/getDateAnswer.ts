import { format, parseISO } from 'date-fns'

/**
 * Convert an ISO8601 date string to a YYYY-MM-DD format using date-fns.
 * @param {string} isoDate - The date string in ISO8601 format (how Awell stores dates).
 * @returns {string} The formatted date in YYYY-MM-DD format (how Healthie stores dates).
 */
export const getDateAnswer = (isoDate: string): string => {
  try {
    const date = parseISO(isoDate)
    return format(date, 'yyyy-MM-dd')
  } catch (error) {
    throw new Error('Invalid date format')
  }
}
