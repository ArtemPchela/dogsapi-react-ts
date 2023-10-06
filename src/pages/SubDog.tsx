import { useParams } from 'react-router-dom';
import { getAllSubBreedImages } from '../api.tsx';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const SubDog = () => {
    const { subDogId, dogId } = useParams();

    const {
        data: dogSubBreedImages,
        isLoading,
        error,
    } = useQuery(['subDog', subDogId], () =>
        getAllSubBreedImages(dogId, subDogId)
    );

    if (isLoading) return <div>Loading...</div>;

    if (error) {
        const axiosError = error as AxiosError;
        return <div>An error has occurred: {axiosError.message}</div>;
    }

    console.log(dogSubBreedImages);

    return (
        <div>
            <h1>{subDogId}</h1>
            {dogSubBreedImages &&
            dogSubBreedImages.message &&
            Array.isArray(dogSubBreedImages.message) ? (
                <div>
                    <h3>{subDogId} Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {dogSubBreedImages.message.map(
                            (imageUrl: any, index: any) => (
                                <img
                                    key={index}
                                    src={imageUrl}
                                    alt={`${subDogId} ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div>No images available for this sub-breed.</div>
            )}
        </div>
    );
};

export default SubDog;
