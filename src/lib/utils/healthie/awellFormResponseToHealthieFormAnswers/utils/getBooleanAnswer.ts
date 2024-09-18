/**
 * Get the boolean answer
 * @param {String} answer - The response to the boolean question in Awell format
 * @returns {string} The answer in Healtie format
 */
export const getBooleanAnswer = (answer: string): string => {
  if (answer === '0') return 'No'

  return 'Yes'
}
