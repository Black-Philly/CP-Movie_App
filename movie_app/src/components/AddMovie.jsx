import {useState, useRef} from "react";

function AddMovie({onAdd}) {
    
    const[newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
    })

    const fileInputRef = useRef(null)

    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=> {
                setNewMovie({...newMovie, posterURL: reader.result});
            };
            reader.readAsDataURL(file)
        }
    };


    

    const handleSubmit = ()







    const handleTextChange = (e) => {
        const {name, value} = e.target;
        setNewMovie({...newMovie, [name]: value});
    }

  return (
    <div className="flex flex-col gap-4 mb-4">
      <input
        name="Title"
        type="text"
        placeholder="Movie title"
        className="border p-2 rounded"
      />
      <input
        name="Description"
        type="text"
        placeholder="Movie description"
        className="border p-2 rounded"
      />
      <input
        name="PostalURL"
        type="file"
        placeholder="Postal Image Url"
        className="border p-2 rounded"
      />
      <input
        name="Rating"
        type="number"
        placeholder="rating"
        className="border p-2 rounded"
      />

      <button className="bg-red-900 text-white rounded border p-3 w-[150px] m-auto text-xl">
        Add Movie
      </button>
    </div>
  );
}

export default AddMovie;
