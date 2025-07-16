import React, { useEffect, useState } from 'react'
import { dataBase } from './Fire'
import { collection, addDoc, doc, getDocs, deleteDoc } from 'firebase/firestore';
export default function File() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();

    const [array, myArray] = useState([]);

    const firstCollection = collection(dataBase, "firstDocument");

    useEffect(() => {
        Items();
    });

    const Items = async () => {
        const myData = await getDocs(firstCollection);
        myArray(myData.docs.map((datas) => ({ ...datas.data(), id: doc.id })));
}
    
    function go() {
        addDoc(firstCollection, { Name: name, Age: age, City: city,  });
        alert("data added successfully");
    }
    
    function del(id) {
        const deleteData = doc(firstCollection, id);
        deleteDoc(deleteData);
    }
  return (

      <>
        <div className="inp p-5 ">
        <input  className="m-3" placeholder='name' onChange={(e)=> setName(e.target.value)}/>
        <input  className="m-3" placeholder='age' onChange={(e)=> setAge(e.target.value)}/>
        <input  className="m-3" placeholder='city' onChange={(e)=> setCity(e.target.value)}/>
        <button className="m-3 btn btn-success" onClick={go}>Go</button>          
        </div>

          <table className='table table-bordered text-center'>
          <tr >
                  <th>Id</th>
                  <th>Username</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Delete</th>
              </tr>

              {array.map((item,index) => (
                  <tr>
                      {/* <td>{item.id}</td> */}
                      <td>{index+1}</td>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.City}</td>
                      <td><button className='btn btn-danger' onClick={()=> del(item.id)}>Delete</button></td>
                  </tr>
              ))}
         </table>
        
      
      </>

)
}
