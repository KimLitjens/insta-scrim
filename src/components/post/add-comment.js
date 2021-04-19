import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComment({ docId, comments, setComments, commentInput }) {
    const [comment, setComment] = useState('');
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const {
        user: { displayName }
    } = useContext(UserContext);

    const handleSubmitComment = async (event) => {
        event.preventDefault();

        setComments([{ displayName, comment }, ...comments]);
        setComment('');

        return firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                comments: FieldValue.arrayUnion({ displayName, comment })
            });
    }

    return (
        <div className="border-t border-gray">
            <p>I will be a form!</p>
        </div>
    );
}