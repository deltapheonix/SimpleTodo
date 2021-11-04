//Socket action
export function createdItem(item) {
    return {
        type: 'CREATED_ITEM',
        item
    }
}

//Socket action
export function updatedItem(item) {
    return {
        type: 'UPDATED_ITEM',
        item
    }
}

// Socket action
export function removedItem(item) {
    return {
        type: 'REMOVED_ITEM',
        item
    }
}

//REST action
export function createItem(item) {
    return {
        type: 'CREATE_ITEM',
        item
    }

}

//REST action
export function updateItem(id, newData) {
    return {
        type: 'UPDATE_ITEM',
        id,
        newData
    }

}

//REST action
export function removeItem(id) {
    return {
        type: 'REMOVE_ITEM',
        id
    }

}

export function findAllItems() {
    return {
        type: 'FIND_ALL_ITEMS'
    }
}