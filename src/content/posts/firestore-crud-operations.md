---
title: 💩 firestore crud operations
slug: firestore-crud-operations
date: "2021-04-26"
topic: coding
---

I recently added a few videos to my [Firebase series][firebase-playlist] which cover [CRUD operations in Firestore][firestore-crud]. But watching a video can get tiresome if you're looking for a snippet of code. These methods are something I'll come back to time and time again, so here's a quick copy and paste reference for CRUD operations in [Firestore][firestore].

## 🆕 create

This snippet creates a new document in a collection. It relies on Firestore to automatically generate a document `id`.

```javascript
const createUser = async user => {
    const ref = await firestore.collection("users").add(user)

    const newUser = {
        id: ref.id,
        ...user,
    }

    return newUser
}
```

## 📚 read

This function retrieves all documents from a collection. It merges the `id` with the document data.

```javascript
const readUsers = async () => {
    const snapshot = await firestore.collection("users").get()

    const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }))

    return users
}
```

This method gets a single document by `id` from a collection. Similar to the function above, it combines the `id` and the document data.

```javascript
const readUser = async id => {
    const doc = await firestore.collection("users").doc(id).get()

    const user = {
        id: doc.id,
        ...doc.data(),
    }

    return user
}
```

Many times you won't be pulling documents by `id`, but rather searching them by a field name. This function gets a document by its `name` field. Again, it merges the `id` with the data when returning the document.

```javascript
const readUserByName = async name => {
    const snapshot = await firestore
        .collection("users")
        .limit(1)
        .where("name", "==", name)
        .get()

    const doc = snapshot.docs[0]

    const user = {
        id: doc.id,
        ...doc.data(),
    }

    return user
}
```

## ☝🏼 update

This function updates an existing document by `id` in a collection. Updates are merged into the existing document. A second call to `firestore` is made to retrieve the latest document. The returned object combines the `id` and the document data.

```javascript
const updateUser = async (id, updates) => {
    await firestore.collection("users").doc(id).update(updates)
    const doc = await firestore.collection("users").doc(id).get()

    const user = {
        id: doc.id,
        ...doc.data(),
    }

    return user
}
```

If you are looking to replace a document, see the `set` [documentation][firestore-set].

## ⛔ delete

This function deletes a document by `id` and returns that `id`.

```javascript
const deleteUser = async id => {
    await firestore.collection("users").doc(id).delete()
    return id
}
```

I hope this little cheat sheet provides as much value to you as it already has to me!

[firebase-playlist]: https://www.youtube.com/watch?v=FArYmEBCMt0&list=PL6Mu1AMmTL-sSswsqShJ5fbIr9XjYHGFm
[firestore-crud]: https://www.youtube.com/watch?v=q13WbRYXrwU&list=PL6Mu1AMmTL-sSswsqShJ5fbIr9XjYHGFm
[firestore]: https://firebase.google.com/products/firestore
[firestore-set]: https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document
