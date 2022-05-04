import { useState, Component } from "react";
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';
import Select from 'react-select';

const optionsAggressionSocialization = [
    {value:"1", label:"High"},
    {value:"2", label:"Medium"},
    {value:"3", label:"Low"}
]

const optionsBoolean = [
    {value:"true", label:"Yes"},
    {value:"false", label:"No"}
]

const optionsGender = [
    {value:"1", label:"Female"},
    {value:"2", label:"Male"}
]

const optionsSize = [
    {value:"1", label:"Small"},
    {value:"2", label:"Medium"},
    {value:"3", label:"Large"},
    {value:"4", label:"Extra Large"},
    {value:"5", label:"Extra Small"}
]

const optionsBreed = [
    {value:"1", label:"German Shepherd"},
    {value:"2", label:"Beagle"},
    {value:"3", label:"Australian Shepherd"},
    {value:"4", label:"Huskey"}
]

const optionsPark = [
    {value:"1", label:"Jacobson Park"},
    {value:"2", label:"Lake Reba Park"}
]


export default function AddDogForm() {
    const [state, dispatch] = useGlobalState();
    const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    birthday: "",
    about_me: "",
    is_fixed: "",
    has_bitten: "",
    aggression: "",
    breed: "",
    favorite_park: "",
    gender: "",
    size: "",
    socialization: "",
    user: `${state.currentUser.user_id}`
  });


    function handleChange(e) {
      setNewDog(
          { value: e.value }
      );
    }

    const HandleSubmit = async(e) => {
        e.preventDefault()
    //     const newDogFormData = new FormData();
    //     newDogFormData.append(...newDog)
    //     newDogFormData.append("name", newDog.name)
    //     newDogFormData.append("age", newDog.title)
    //     newDogFormData.append("birthday", newDog.description)
    //     newDogFormData.append("about_me", newDog.about_me)
    //     newDogFormData.append("is_fixed", newDog.is_fixed)
    //     newDogFormData.append("has_bitten", newDog.has_bitten)
    //     newDogFormData.append("aggression", newDog.aggression)
    //     newDogFormData.append("breed", newDog.breed)
    //     newDogFormData.append("favorite_park", newDog.favorite_park)
    //     newDogFormData.append("gender", newDog.gender)
    //     newDogFormData.append("size", newDog.size)
    //     newDogFormData.append("socialization", newDog.socialization)
    //     newDogFormData.append("user", `${state.currentUser.user_id}`)


        try {
            let options = {
              method: "POST",
              url: '/dogs/',
              data: newDog,
              headers: { "Content-Type": "multipart/form-data" },
            }
            let resp = await request(options)
        } catch(error) {
            console.log(error)
        }
    }

    return (
    <div>
        <form onSubmit={HandleSubmit}>
            <label>
                Name:
                <input
                    className="newDogInput"
                    name="name"
                    value={newDog.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Age:
                <input
                    className="newDogInput"
                    name="age"
                    value={newDog.age}
                    onChange={handleChange}
                />
            </label>
            <label>
                Birthday:
                <input
                    className="newDogInput"
                    name="birthday"
                    type="date"
                    value={newDog.birthday}
                    onChange={handleChange}
                />
            </label>
            <label>
                About Me Statement:
                <input
                    className="newDogInput"
                    name="about_me"
                    value={newDog.about_me}
                    onChange={handleChange}
                />
            </label>
            <label>
                Are they fixed?
                <Select
                    className="newDogInput"
                    name="is_fixed"
                    options={optionsBoolean}
                    value={newDog.is_fixed}
                    onChange={handleChange}
                />
            </label>
            <label>
                Do they have a history of biting another dog or person?
                <Select
                    className="newDogInput"
                    name="has_bitten"
                    options={optionsBoolean}
                    value={newDog.has_bitten}
                    onChange={handleChange}
                />  
            </label>
            <label>
                How would you rank their aggression?
                <Select
                    className="newDogInput"
                    name="aggression"
                    options={optionsAggressionSocialization}
                    value={newDog.aggression}
                    onChange={handleChange}
                />
            </label>
            <label>
                {/* eventually this one and parks will have a creatable input box that can relate
                 to the database and make a post if the breed or park aren't in the system yet */}
                Breed:
                <Select
                    className="newDogInput"
                    name="breed"
                    options={optionsBreed}
                    value={newDog.breed}
                    onChange={handleChange}
                />
            </label>
            <label>
                Favorite Park:
                <Select
                    className="newDogInput"
                    name="favorite_park"
                    options={optionsPark}
                    value={newDog.favorite_park}
                    onChange={handleChange}
                />
            </label>
            <label>
                Gender:
                <Select
                    className="newDogInput"
                    name="gender"
                    options={optionsGender}
                    value={newDog.gender}
                    onChange={handleChange}
                />
            </label>
            <label>
                Size:
                <Select
                    className="newDogInput"
                    name="size"
                    options={optionsSize}
                    value={newDog.size}
                    onChange={handleChange}
                />
            </label>
            <label>
                How would you rank their exposure to other dogs and people?
                <Select
                    className="newDogInput"
                    name="socialization"
                    options={optionsAggressionSocialization}
                    value={newDog.socialization}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">
                Create
            </button>
        </form>
    </div>
    )
}

