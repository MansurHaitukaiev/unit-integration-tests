// tests/api.test.js
const fetchPosts = require('../src/api');
const axios = explicitImport = require('axios');

// Явно задаємо мок для axios, щоб axios.get був mock-функцією
jest.mock('axios', () => ({
    get: jest.fn()
}));

describe('api: fetchPosts', () => {
    let response = {};

    beforeEach(() => {
        jest.clearAllMocks();
        response = {
            data: [
                { "userId": 1, "id": 1, "title": "Тестова назва 1", "body": "Тестовий контент 1" },
                { "userId": 1, "id": 2, "title": "Тестова назва 2", "body": "Тестовий контент 2" },
                { "userId": 1, "id": 3, "title": "Тестова назва 3", "body": "Тестовий контент 3" }
            ]
        };
    });

    test('Отримання постів зі стороннього API', async () => {
        axios.get.mockReturnValue(response);

        const posts = await fetchPosts();

        expect(axios.get).toHaveBeenCalledTimes(1); // Використовуємо актуальний метод перевірки викликів
        expect(posts).toBeInstanceOf(Array); // Очікуємо масив
        expect(posts.length).toBeGreaterThan(0); // Масив не порожній
        expect(posts[0]).toHaveProperty('id'); // Перевірка структури об'єкта
        expect(posts[1].id).toEqual(2); // Другий пост має id = 2
        expect(posts[1].title).toEqual('Тестова назва 2'); // Перевірка замоканої назви
    });
});