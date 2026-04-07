export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const API_URLS = {
    auth: {
        login: `${API_BASE_URL}/api/auth/login`,
        register: `${API_BASE_URL}/api/auth/register`,
    },
    users: {
        profile: `${API_BASE_URL}/api/users/profile`,
        favorites: `${API_BASE_URL}/api/users/favorites`,
    },
    resources: {
        base: `${API_BASE_URL}/api/resources`,
    },
    certifications: {
        base: `${API_BASE_URL}/api/certifications`,
        submit: `${API_BASE_URL}/api/certifications/submit`,
    }
};
