export interface LeadUtm {
    utmMedium: string | null;
    utmCampaign: string | null;
    utmId: string | null;
    utmTerm: string | null;
    utmContent: string | null;
}

export interface LeadRequestBody {
    mobile: string;
    source: string;
    referralCode: string;
    utm: LeadUtm;
}

export interface CasSummaryError {
    code: string;
    message: string;
}

export interface LeadContext {
    casSummaryErrors?: CasSummaryError[];
    maskedPan?: string;
    lastErrorTimestamp?: string;
}

export interface LeadResponse {
    id: string;
    email: string | null;
    mobile: string;
    firstName: string | null;
    lastName: string | null;
    status: string;
    source: string;
    productInterest: string | null;
    referralCode: string;
    context: LeadContext;
    remarks: string;
    utm: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}
