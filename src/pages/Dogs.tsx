import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getAllBreeds } from '../api.tsx';
import Capitalize from '../helpers/Capitalizer.tsx';

// Define the interface for the API response
interface ApiResponse {
    message: Record<string, string[]>;
    status: string;
}

const Dogs = () => {
    const { data, isLoading, error } = useQuery<ApiResponse>(
        ['dogs'],
        getAllBreeds
    );

    if (isLoading) return <div>Loading...</div>;

    if (error) {
        const axiosError = error as AxiosError;
        return <div>An error has occurred: {axiosError.message}</div>;
    }

    const dogBreeds = Object.keys(data?.message ?? {});

    return (
        <div>
            <h2>List of Dog Breeds</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {dogBreeds.map((breed, index) => (
                    <li
                        key={breed}
                        className={`text-black rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 ${
                            index % 2 === 0 ? 'bg-blue-200' : 'bg-pink-200'
                        }`}
                    >
                        <div
                            className={`bg-gradient-to-r from-${
                                index % 2 === 0 ? 'blue-500' : 'pink-500'
                            } to-${
                                index % 2 === 0 ? 'blue-400' : 'pink-400'
                            } p-4`}
                        >
                            <div className="text-lg font-semibold mb-2">
                                <Capitalize text={`${breed}`} />
                            </div>
                            <div className="flex justify-end">
                                <Link
                                    to={`/dogs/${breed}`}
                                    className={`bg-${
                                        index % 2 === 0 ? 'blue' : 'pink'
                                    }-600 hover:bg-${
                                        index % 2 === 0 ? 'blue' : 'pink'
                                    }-700 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out`}
                                >
                                    Go to Gallery
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dogs;
