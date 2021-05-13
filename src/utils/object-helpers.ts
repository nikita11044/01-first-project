export const updateObjectInArray = (items: any[], itemId: string, objPropName: string, newObjProps: any) => {
    return items.map(u => u[objPropName] === itemId ? {...u, ...newObjProps} : u)
}