export interface ITour {
  name: string,
  description: string,
  tourOperator: string,
  price: string,
  img: string,
  id?: string,
  type?: string,
  date?: string,

  //_id: string | undefined

}

export interface ITourClient {

  name: string,
  description: string,
  tourOperator: string,
  price: string,
  img: any,

}