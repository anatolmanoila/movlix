import _ from 'lodash';
//paginate data on the client side
export function paginate(items, pageNumber, pageSize) {

    const startIndex = (pageNumber - 1) * pageSize; //calculate the starting index of the items of this page

    // _.slice(items, startIndex);
    // _.take(items, pageSize);

    return _(items) //this will return a lodash object & then we can chain
        .slice(startIndex)
        .take(pageSize)
        .value(); //convert it to a regular array & then return that array from this fn
}