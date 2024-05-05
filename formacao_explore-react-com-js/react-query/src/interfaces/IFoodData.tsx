export interface IFoodData {
    id: string,
    name: string,
    image: string,
    price: string
}

export interface IFoodResponse {
    data: IFoodData[]
}
