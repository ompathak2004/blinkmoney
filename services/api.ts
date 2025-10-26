// made axios instance in api file considering there will be different services , with different base urls so each axios instance will be different

import { config } from '@/config'
import axios from 'axios'
import type { PanRequestParams, PanRequestResponse, PortfolioFetchRequestBody, PortfolioFetchResponse, PortfolioVerifyRequestBody, PortfolioVerifyResponse, LeadRequestBody, LeadResponse, CouponResponse } from '@/types'

const BASE_URL = config.API_BASE_URL

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const publicEndpoints: string[] = [
    '/v1/users/pan/request',
    '/portfolio/fetch/request',
    '/portfolio/fetch/verify',
    '/v1/leads'
];

api.interceptors.request.use(
    (config) => {
        const isPublicEndpoint = publicEndpoints.some(endpoint =>
            config.url?.includes(endpoint)
        );

        if (!isPublicEndpoint) {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => response,
    error => {
        if (error?.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/enter-mobile";
        }
        return Promise.reject(error);
    }
);

// PAN Services
export const panServices = {
    requestPan: async (params: PanRequestParams): Promise<PanRequestResponse> => {
        try {
            const response = await api.get<PanRequestResponse>('/v1/users/pan/request', {
                params,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

// Portfolio Services
export const portfolioServices = {
    fetchRequest: async (body: PortfolioFetchRequestBody): Promise<PortfolioFetchResponse> => {
        try {
            const response = await api.post<PortfolioFetchResponse>('/portfolio/fetch/request', body);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    
    verifyFetch: async (body: PortfolioVerifyRequestBody): Promise<PortfolioVerifyResponse> => {
        try {
            const response = await api.post<PortfolioVerifyResponse>('/portfolio/fetch/verify', body);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

// Lead Services
export const leadServices = {
    createLead: async (body: LeadRequestBody): Promise<LeadResponse> => {
        try {
            const response = await api.post<LeadResponse>('/v1/leads', body);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

// Coupon Services
export const couponServices = {
    getCouponById: async (couponId: string): Promise<CouponResponse> => {
        try {
            const response = await api.get<CouponResponse>(`/v1/coupons/${couponId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default api;
