// /* eslint-disable no-unused-vars */
// import { firestore } from './index.js'
// import { members } from '../data/members.js'
// import { collection, getDocs, addDoc } from 'firebase/firestore'

// const userCollectionRef = collection(firestore, 'members')

// export const addMember = async (member) => {
//     const docRef = await addDoc(userCollectionRef, member)
//     console.log('Document written with ID: ', docRef.id)
// }

// export const addMembers = async () => {
//     members.forEach(async (member, idx) => {
//         console.log(idx);
//         await addMember(member)
//     })
// }

// export const getMembers = async () => {
//     const querySnapshot = await getDocs(userCollectionRef)
//     const data = querySnapshot.docs.map(doc => doc.data())
//     console.log(data);

// }

// export const countMembers = async () => {
//     const querySnapshot = await getDocs(userCollectionRef)
//     const data = querySnapshot.docs.map(doc => doc.data())
//     console.log(data.length);
// }