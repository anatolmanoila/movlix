import _ from 'lodash';


export function paginate (items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const lastIndex = pageSize * pageNumber;

  // return _(items)
  // .slice(startIndex)
  // .take(pageSize)
  // .value();

  return items.slice(startIndex, lastIndex);
  //return [];
}