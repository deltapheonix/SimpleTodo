export function createdItem(item) {
    return {
        type: 'CREATED_ITEM',
        item
    }
}

export function updatedItem(item) {
    return {
        type: 'UPDATED_ITEM',
        item
    }
}

export function removedItem(item) {
    return {
        type: 'REMOVED_ITEM',
        item
    }
}