export interface AppRoutesInterface {
    path: string;
    Component: () => JSX.Element;
}

export interface RedirectButtonInterface {
    text: string;
    to?: string;
}