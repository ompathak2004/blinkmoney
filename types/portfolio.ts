export interface PortfolioFetchRequestBody {
    mobile: string;
    pan: string;
    maskedPan: boolean;
}

export interface PortfolioFetchRequestData {
    reqId: number;
    otpRef: string;
    userSubjectReference: string;
    clientRefNo: string;
}

export interface PortfolioFetchResponse {
    success: boolean;
    data: PortfolioFetchRequestData;
}
