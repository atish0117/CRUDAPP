import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [show, setShow] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Employee");
      setShow(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if(window.confirm("are you sure you want to delete this employee?")){
      await axios.delete(`http://localhost:3001/Employee/${id}`);
      // After deletion, refetch the data
      getData();
    }
   } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

<table>
  <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>post</th>
    <th>Action</th>
  </thead>
  <tbody>
      {show.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        show.map((item, index) => (
          <>  
                  {/* <div key={index} className="border p-4 my-2">
            <h3>Name: {item.name}</h3>
            <p>ID: {item.id}</p>
            <p>Email: {item.email}</p>
            <button
              className="bg-red-500 text-white px-3 py-1 mr-2"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>

              <Link to={`/update/${item.id}`}> <button className="bg-blue-500 text-white px-3 py-1">Update</button> </Link>
          </div> */}

          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.post}</td>
            <td>
              <button
              className="bg-red-500 text-white px-3 py-1 mr-2"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>

              <Link to={`/update/${item.id}`}> <button className="bg-blue-500 text-white px-3 py-1">Update</button> </Link>
            </td>
          </tr>
          </>

        ))
      )}
      </tbody>
</table>

    </div>
  );
};
