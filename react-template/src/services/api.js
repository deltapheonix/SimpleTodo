export function createItem(service, item) {
    return service.create(item).then((data) => data);
}

export function removeItem(service, id) {
    return service.remove(id).then((data) => data);
}

export function updateItem(service, id, newData) {
    return service.upadte(id, newData).then((data) => data);
}

export function findAllItems(service) {
    return service.find({
        //filter queries sorted by createdAt in descending order.
        query: {'$sort': {'createdAt': -1}}
    }).then((data) => data);
}