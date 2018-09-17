const MOCK_NETWORK_DELAY_MS = 300;

/*
 MockUserService provides in-memory manipulation and retrieval of user data,
 to demonstrate frontend functionality without a working REST api.
*/
class MockUserService {
    login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(username), MOCK_NETWORK_DELAY_MS);
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), MOCK_NETWORK_DELAY_MS);
        });
    }
}
export default new MockUserService();