/**
 * AuthService
 * Handles user authentication. (Mock Implementation)
 */
export class AuthService {
    /**
     * Signs in a user with email and password.
     * @param email - User email
     * @param password - User password
     * @returns Promise<{ success: boolean; error?: string }>
     */
    static async signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Return fake error for testing/security demonstration
        return {
            success: false,
            error: "Invalid login credentials"
        };
    }

    /**
     * Signs out the current user
     */
    static async logout() {
        // Mock logout delay
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    /**
     * Gets the current user session
     */
    static async getSession() {
        return null;
    }
}
