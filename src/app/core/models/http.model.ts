export interface HttpResponse<T> {
    url(url: any): unknown;
    code: string;
    data: T;
    msg: string;
}
