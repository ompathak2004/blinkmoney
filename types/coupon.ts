export interface CouponResponse {
    id: string;
    code: string;
    pin: string | null;
    status: string;
    rewardId: string;
    issuedAt: string;
    redeemedAt: string | null;
    revokedAt: string | null;
    expiresAt: string;
    origin: string;
    provider: string;
    batchCode: string;
    termsUrl: string | null;
    validFrom: string;
    validUntil: string;
    createdAt: string;
    updatedAt: string;
}
