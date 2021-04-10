import React from 'react'
import Skeleton from 'react-loading-skeleton'
import useFollwedUsersPhotos from '../hooks/use-followed-users-photos'

export default function Timeline() {
    const { photos } = useFollwedUsersPhotos
    console.log('wokring')

    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={500} className="mb-5" />
            ) : (
                    photos.map((content) => <p>I will be a photo!</p>)
                )}
        </div>
    );
}