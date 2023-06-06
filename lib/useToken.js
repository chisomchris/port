export const useToken = (data) => {
    return data?.token.user ||
        data?.token.token.user ||
        data?.token.token.token.user ||
        data?.token.token.token.token.user ||
        data?.token.token.token.token.token.user ||
        data?.token.token.token.token.token.token.user ||
        data?.token.token.token.token.token.token.token.user ||
        data?.token.token.token.token.token.token.token.token.user ||
        data?.token.token.token.token.token.token.token.token.token.user  
} 