export const extractNextPage = string => {
  const nextPage =
    string &&
    string.split(',').filter(str => str.includes('rel="next"')).length &&
    string.split(',').filter(str => str.includes('rel="next"'))[0]

  const query = nextPage && nextPage.slice(nextPage.indexOf('?') + 1, nextPage.indexOf('>'))

  return query
}
