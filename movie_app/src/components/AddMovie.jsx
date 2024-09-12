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




    const handleSubmit = () => {
        onAdd(newMovie);
        setNewMovie({
            title:'',
            description: '',
            posterURL: '',
            rating: '',
        });
        if(fileInputRef.current){
            fileInputRef.current.value = ''
        }
    }



    const handleTextChange = (e) => {
        const {name, value} = e.target;
        setNewMovie({...newMovie, [name]: value});
    }

  return (
    <div className="flex flex-col gap-4 mb-4">
      <input
        name="title"
        value={newMovie.title}
        type="text"
        placeholder="Movie title"
        className="border p-2 rounded"
        onChange={handleTextChange}
      />
      <input
        name="description"
        type="text"
        placeholder="Movie description"
        className="border p-2 rounded"
        value={newMovie.description}
        onChange={handleTextChange}
      />
      <input
        name="posterURL"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        placeholder="Poster Image Url"
        className="border p-2 rounded"
        onChange={handleFileChange}
      />
      <input
        name="rating"
        type="number"
        min={1}
        max={5}
        placeholder="rating"
        className="border p-2 rounded"
        value={newMovie.rating}
        onChange={handleTextChange}
      />

      <button onClick={handleSubmit} className="bg-red-900 text-white rounded border p-3 w-[150px] m-auto text-xl">
        Add Movie
      </button>
    </div>
  )
}

export default AddMovie
