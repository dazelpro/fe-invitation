export interface Profile {
    id: number;
    idOrder: number;
    name: string;
    nickName: string;
    parentName: string;
    address: string;
    otherInformation: string;
    instagramLink: string;
    imageUrl: string;
    ordering: number;
}
export interface Event {
    id: number;
    idOrder: number;
    title: string;
    name: string;
    address: string;
    mapLink: string;
    primary: string;
    date: string;
    timeStart: string;
    timeEnd: number;
    timeTillTheEnd: number;
}
export interface Story {
    id: number;
    idOrder: number;
    title: string;
    subtitle: string;
    description: string;
    indexing: number;
}
export interface Gallery {
    id: number;
    idOrder: number;
    imageUrl: string;
}
