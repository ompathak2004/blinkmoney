export interface PanRequestData {
    mobile: string;
    pan: string;
    fullName: string;
}

export interface PanRequestResponse {
    status: string;
    message: string;
    data: PanRequestData;
}

export interface PanRequestParams {
    mobile: string;
}
