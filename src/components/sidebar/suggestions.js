import React, { memo, useState, useEffect } from 'react'
import Skelton from 'react-loading-skeleton'
// import { getSuggestedProfiles } from '../../services/firebase'

const Suggestions = ({ userId }) => {
    const [profiles, setProfiles] = useState(null)

    // useEffect(() => {
    //     async function suggestedProfiles() {
    //         const response = await getSuggestedProfiles(userId)
    //         setProfiles(response)
    //     }
    //     // if (userId) {
    //     //     suggestedProfiles()
    //     // }
    // }, [userId])

    return !profiles ? (
        <Skelton count={1} height={150} className="mt-5" />
    ) : profiles.length > 0 ? (
        <p>Profiles Here!!!</p>
    ) : null;
}

export default memo(Suggestions)