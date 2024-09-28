/* // src/utils/jwtUtils.ts
import jwtDecode from 'jwt-decode';

export const getUserIdFromToken = (token: string): string => {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.userId; // Adjust the key according to your JWT payload structure
};
 */