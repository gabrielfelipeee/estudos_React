export interface IFoodData {
    id?: number,
    name: string,
    image: string,
    price: string
}

export interface IFoodResponse {
    data: IFoodData[]
}
