/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4100/profile")
      .then((res) => {
        setUser(res.data);
        setFormData({
          username: res.data.username,
          email: res.data.email,
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:4100/profile/update", formData)
      .then((res) => {
        setUser(res.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(
          console.error("Error while updating the profile:", error)
        );
      });
  };


  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your profile? This action cannot be undone."
      )
    ) {
      // Proceed with deletion if confirmed
      axios
        .delete("http://localhost:4100/profile/delete")
        .then((response) => {
          navigate('/')
        })
        .catch((error) => {
          console.error("Error deleting profile:", error);
        });
    } else {
      // User canceled the deletion
      console.log("Profile deletion canceled");
    }
  };



  if (!user) return <div>Loading...</div>;

  return (
    
    <div>
      {isEditing ? (
          <div className="text-3xl bg-stone-600">
          <h2 className="text-center">Edit Profile</h2>

          <form className="grid grid-cols-1 ml-24">
            <div>
            <label>
              Username :
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 w-2/4 border-gray-500  rounded-md shadow-md bg-stone-400 p-1"
                />
            </label>
            </div>  
            <label>
              Email :
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="m-2 w-2/4 border-gray-500  rounded-md shadow-md bg-stone-400 p-1"
                />
            </label>
            <label>
              Password :
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="m-2 w-2/4 border-gray-500  rounded-md shadow-md bg-stone-400 p-1"
              />
            </label>
          </form>
          <button
            type="button"
            className="bg-green-500 p-2 rounded-md m-2 text-white ml-96"
            onClick={handleUpdate}
            >
            Save
          </button>
          <button
            type="button"
            className="bg-red-600 p-2 rounded-md m-2  text-white"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div> 
    
      ) : (
        <div className="m-10 ">
          <div className=" text-center text-2xl font-sans font-bold bg-slate-400 p-5 ">
            <h1>My Profile</h1>
          </div>
          <div className="text-center border-zinc-600  bg-slate-300  ">
            <div className="p-5">
              <p className="text-2xl hover:underline cursor-pointer">
                Username : {user.username}
              </p>
            </div>
            <div className="p-5">
              <p className="cursor-pointer text-2xl hover:underline">
                Email : {user.email}
              </p>
            </div>
            <div className="p-8 ">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-indigo-500 p-2 w-24 m-2 rounded-md text-white mr-7 text-2xl "
                >
                Edit
              </button>
              <button onClick={handleDelete} className="bg-red-500 w-24 p-2 m-2 rounded-md text-white text-2xl">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
