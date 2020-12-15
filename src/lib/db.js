import firebase from './firebase'

const firestore = firebase.firestore()

export const createUser = (user) => {
    return firestore
            .collection('user')
            .doc(user.uid)
            .set({user}, {merge:true})
}