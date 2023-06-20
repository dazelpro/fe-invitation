export interface HttpResponse<T> {
    code: string;
    data: T;
    msg: string;
}
