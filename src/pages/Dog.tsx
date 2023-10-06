// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { AxiosError } from 'axios';
// import { getBreedImages } from '../api.tsx';
//
// const Dog = () => {
//     const { dogId } = useParams();
//
//     const {
//         data: breedDogImages,
//         isLoading,
//         error,
//     } = useQuery(['breedDogImages', dogId], () => getBreedImages(dogId), {
//         enabled: !!dogId,
//     });
//
//     if (isLoading) return <div>Loading...</div>;
//
//     if (error) {
//         const axiosError = error as AxiosError;
//         return <div>An error has occurred: {axiosError.message}</div>;
//     }
//
//     const dogName = dogId
//         ?.split('-')
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
//
//     return (
//         <div>
//             <h1>{dogName}</h1>
//             <div>
//                 <h2>SubBreeds{}</h2>
//             </div>
//             {breedDogImages && (
//                 <div>
//                     <h3>{dogName} Gallery</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                         {breedDogImages.message.map(
//                             (imageUrl: any, index: any) => (
//                                 <img
//                                     key={index}
//                                     src={imageUrl}
//                                     alt={`${dogName} ${index + 1}`}
//                                     style={{
//                                         width: '100%',
//                                         height: '100%',
//                                     }}
//                                 />
//                             )
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Dog;

import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getBreedImages, getAllSubBreeds } from '../api.tsx';
import Capitalize from '../helpers/Capitalizer.tsx'; // Import both functions.

const Dog = () => {
    const { dogId } = useParams();

    const {
        data: breedDogImages,
        isLoading: imagesLoading,
        error: imagesError,
    } = useQuery(['breedDogImages', dogId], () => getBreedImages(dogId), {
        enabled: !!dogId,
    });

    const {
        data: subBreeds,
        isLoading: subBreedsLoading,
        error: subBreedsError,
    } = useQuery(['subBreeds', dogId], () => getAllSubBreeds(dogId), {
        enabled: !!dogId,
    });

    if (imagesLoading || subBreedsLoading) return <div>Loading...</div>;

    if (imagesError) {
        const imagesAxiosError = imagesError as AxiosError;
        return <div>An error has occurred: {imagesAxiosError.message}</div>;
    }

    if (subBreedsError) {
        const subBreedsAxiosError = subBreedsError as AxiosError;
        return <div>An error has occurred: {subBreedsAxiosError.message}</div>;
    }

    return (
        <div>
            <h1>
                <Capitalize text={`${dogId}`} />
            </h1>
            <div>
                <h2>SubBreeds</h2>
                {subBreeds && subBreeds.message.length > 0 ? (
                    <ul>
                        {subBreeds.message.map(
                            (subBreed: string, index: number) => (
                                <li key={index}>
                                    <Link to={`/dogs/${dogId}/${subBreed}`}>
                                        {subBreed}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                ) : (
                    <div>No sub-breeds available.</div>
                )}
            </div>
            {breedDogImages && (
                <div>
                    <h3>
                        <Capitalize text={'dogId'} /> Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {breedDogImages.message.map(
                            (imageUrl: any, index: any) => (
                                <img
                                    key={index}
                                    src={imageUrl}
                                    alt={`${dogId} ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dog;
