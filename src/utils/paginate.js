import _ from 'lodash';
//paginate data on the client side
export function paginate(items, pageNumber, pageSize) {
    //calculate the starting index of the card
    const startIndex = (pageNumber - 1) * pageSize;
    //get all the items for the current page

    // convert to _ wrapper in order to chain fluent & then convert to a regular array
   return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
    // _.slice(items, startIndex);
    // _.take()
}