import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dog.ceo/api/',
});

//LIST ALL BREEDS
export async function getAllBreeds() {
    try {
        const response = await api.get('breeds/list/all');

        return await response.data;
    } catch (e) {
        throw e;
    }
}

//LIST ALL SUB-BREEDS
export async function getAllSubBreeds(breed: string | undefined) {
    try {
        const response = await api.get(`breed/${breed}/list`);

        return await response.data;
    } catch (e) {
        throw e;
    }
}

//LIST ALL SUB-BREED IMAGES
export async function getAllSubBreedImages(
    breed: string | undefined,
    subBreed: string | undefined
) {
    try {
        const response = await api.get(`breed/${breed}/${subBreed}/images`);

        return await response.data;
    } catch (e) {
        throw e;
    }
}

//DISPLAY SINGLE RANDOM IMAGE FROM ALL DOGS COLLECTION
export async function getRandomImages() {
    try {
        const response = await api.get('breeds/image/random');

        return await response.data;
    } catch (e) {
        throw e;
    }
}

//BY BREED
export async function getBreedImages(breed: string | undefined) {
    try {
        const response = await api.get(`breed/${breed}/images`);

        return await response.data;
    } catch (e) {
        throw e;
    }
}

//DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION
export async function getRandomImagesAll() {
    try {
        const response = await api.get('/image/random/1');

        return await response.data;
    } catch (e) {
        throw e;
    }
}

//MULTIPLE IMAGES FROM A BREED COLLECTION
export async function getBreedRandomImagesAll(breed: string | undefined) {
    try {
        const response = await api.get(`breed/${breed}/images/random/1`);

        return await response.data;
    } catch (e) {
        throw e;
    }
}

//RANDOM IMAGE FROM A BREED COLLECTION
export async function getSubBreedRandomImages(
    breed: string | undefined,
    subBreed: string | undefined
) {
    try {
        const response = await api.get(
            `breed/${breed}/${subBreed}/images/random`
        );

        return await response.data;
    } catch (e) {
        throw e;
    }
}
