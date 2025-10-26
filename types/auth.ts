export interface AuthUser {
    id: string;
}

export interface AuthData {
    refreshToken: string;
    token: string;
    tokenExpires: number;
    user: AuthUser;
    loggedInAt: string;
}

export interface PortfolioVerifyRequestBody {
    generateSession: boolean;
    mobile: string;
    clientRefNo: string;
    otp: string;
}

export interface PortfolioVerifyResponse {
    success: boolean;
    auth: AuthData;
}
