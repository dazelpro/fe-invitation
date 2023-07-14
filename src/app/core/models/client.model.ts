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
export interface Gift {
    id: number;
    idOrder: number;
    type: string;
    bankName: string;
    bankLogo: string;
    bankAccountName: string;
    bankAccountNumber: string;
    giftName: string;
    giftAddress: string;
    status: number;
}
export interface Guest {
    id: number;
    idOrder: number;
    name: string;
    phone: string;
    email: string;
    view: string;
    confirm: string;
    numberOfGuest: string;
}
export interface Greeting {
    id: number;
    idOrder: number;
    idUser: number;
    name: string;
    message: string;
    status: number;
}
export interface CounterDashboard {
    counterGuest: number;
    counterGuestPresent: number;
    counterGuestNotPresent: number;
    counterGuestUncertain: number;
    counterGreetingCard: number;
    invitationOpened: number;
}
