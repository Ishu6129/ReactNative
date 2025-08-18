import { faker } from '@faker-js/faker';
const generateFakeNews = (limit) => {
    const newsList = [];
    for (let i = 0; i < limit; i++) {
        newsList.push({
            id: faker.string.uuid(),
            title: faker.lorem.sentence({min: 3, max: 4}),
            content: faker.lorem.paragraph({min: 7, max: 10}),
            date: faker.date.past().toLocaleDateString(),
            image: faker.image.urlPicsumPhotos({width: 640, height: 480}),
            author: faker.person.fullName(),
        });
    }
    return newsList;
};
export default generateFakeNews;
        
