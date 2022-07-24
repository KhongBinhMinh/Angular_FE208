export type Product = {
    _id:string  // Nếu dùng nodejs thì string
    name:string 
    price:string
    img:string
    decs:string
    status:number
}
export type ProductCreate={
    id?:string,
    name?:string
    price?:string
    img?:string
    decs?:string
    status?:number

}
export type ProductCart = {
    id:string
    name:string
    price:string
    value:number
}
export type Category = {
    _id: string,
    name: string,
    
}
export type Products = {
    id:string
    name: string,
    img:string,
    price:string,
    decs:string
}


export type Users = {
    _id:string
    name:string,
    email:string
}