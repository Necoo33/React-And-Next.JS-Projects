import { useEffect, useState, useRef } from "react";
// even don't use it, you should import that code too otherwise it gives an error.
import { firebaseDatabaseService } from "./config";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, limit } from "firebase/firestore";

// with that hook you can add && delete documents from certain database, output them with react's abilities and take snapshot when added 
// or deleted a document on that database, also filter, order and limit that documents output.

export function useCollection(colref, filter = null, order = null, limiting = 10000){
    let [documents, setDocuments] = useState(null);
    let filterRef = useRef(filter).current;
    let orderRef = useRef(order).current;
    

    useEffect(function(){
        let collectionReference = collection(getFirestore(), colref);

        // you don't have to enter any other code if you enter only first one or two arguments, but for example if you want to enter
        // only third argument you should write "null" to second argument. fourth argument is does basically nothing if you don't
        // apply any value to it, if you want to use that you should enter a value to second and third arguments, even null. For more 
        // detail look to the sample invokes which on below of this page.
    

        if(filterRef || orderRef){
            if(filterRef && orderRef){
                collectionReference = query(collectionReference, where(...filterRef), orderBy(...orderRef), limit(limiting));
            }

            if(filterRef === null){
                collectionReference = query(collectionReference, orderBy(...orderRef), limit(limiting));
            }

            if(orderRef === null){
                collectionReference = query(collectionReference, where(...filterRef), limit(limiting));
            }

        }

        let unsubscribe = onSnapshot(collectionReference, function(parameter){
            let dataList = [];

            parameter.docs.forEach(function(parameter){
                dataList.push({...parameter.data(), id: parameter.id});
            });

            setDocuments(dataList);
        });
        
        return () => unsubscribe();

    }, [colref, filterRef, orderRef, limiting]);

    // When you invoke next function you should put the object which you want to add firestore as document as that function's argument. 

    async function addingDocument(docInfo){
        await addDoc(collection(getFirestore(), colref), docInfo);
    }

    // when you invoke next function you should put the id of document which you want to delete as argument.

    async function deletingDocument(docId){
        let docRef = doc(getFirestore(), colref, docId);

        await deleteDoc(docRef);
    }


    return { documents, addingDocument, deletingDocument };
}

        /* 
        
        sample invokes:

            1 - useCollection("books", ["id", "==", "user.uid"], ["author", "asc"], 5)
            2 - useCollection("books", null, ["author", "asc"], 5)
            3 - useCollection("books", ["id", "==", "user.uid"], null, 5)
            4 - useCollection("books", null, null, 5)
            5 - useCollection("books", null, null)
            6 - useCollection("books", null, ["author", "asc"])
            7 - useCollection("books", ["id", "==", "user.uid"], null)
            8 - useCollection("books", ["id", "==", "user.uid"])
            9 - useCollection("books", null, null)
        
        */

