export const filterRepos = (array, firstAttr, secondAttr, input) =>
  array.length &&
  array.reduce((arr, obj) => {
    if (
      (obj[firstAttr] && obj[firstAttr].toLowerCase().includes(input.toLowerCase())) ||
      (obj[secondAttr] && obj[secondAttr].toLowerCase().includes(input.toLowerCase()))
    )
      arr.push(obj)

    return arr
  }, [])
