export interface IMenuItem {
    id: number,
    name: string,
    link: string,
}

export interface IMenuApp {
    menu: Array<IMenuItem>
}

export interface IMenuProd {
    menu: Array<IMenuItem>
}