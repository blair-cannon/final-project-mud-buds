import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';

const optionsAggressionSocialization = [
    {value:1, label:"High"},
    {value:2, label:"Medium"},
    {value:3, label:"Low"}
]

const optionsBoolean = [
    {value:true, label:"Yes"},
    {value:false, label:"No"}
]

const optionsGender = [
    {value:1, label:"Female"},
    {value:2, label:"Male"}
]

const optionsSize = [
    {value:1, label:"Small"},
    {value:2, label:"Medium"},
    {value:3, label:"Large"},
    {value:4, label:"Extra Large"},
    {value:5, label:"Extra Small"}
]

const optionsBreed = [
    {value:1, label:"German Shepherd"},
    {value:2, label:"Beagle"},
    {value:3, label:"Australian Shepherd"},
    {value:4, label:"Huskey"}
]

const optionsPark = [
    {value:1, label:"Jacobson Park"},
    {value:2, label:"Lake Reba Park"}
]

const optionsTags = [
    {value:"1", label:"Hyper"},
    {value:"2", label:"Swimmer"},
    {value:"3", label:"Kid-friendly"},
    {value:"4", label:"Fast"},
    {value:"5", label:"WallLeaner"},
]



export default function AddDogForm() {
    let navigate = useNavigate();
    const [state, dispatch] = useGlobalState();
    const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    birthday: "",
    about_me: "",
    is_fixed: null,
    has_bitten: null,
    aggression: null,
    breed: null,
    favorite_park: null,
    gender: null,
    size: null,
    socialization: null,
    user: `${state.currentUser.user_id}`,
    tags: []
  });


    const handleChange = (event) => {
        // var name = event.target.getAttribute("name");
        console.log('target', event.target)
        console.log('target', event.target.name)
        console.log('value', event.target.value)
        console.log('1', newDog.tags)
        if ([event.target.name] == "tags") {
                setNewDog(
                       { ...newDog, 
                        tags: [...newDog.tags, parseInt(event.target.value)]
                        // tags: newDog.tags.push(event.target.value)
                        // [event.target.name]: newDog.tags.push("hey")
                    });
                }
                else {
                    setNewDog({
                        ...newDog,
                        [event.target.name]: event.target.value,
                    });
                    console.log('object', newDog)
        }
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        const newDogFormData = new FormData();
        newDogFormData.append("name", newDog.name)
        newDogFormData.append("age", newDog.title)
        newDogFormData.append("birthday", newDog.description)
        newDogFormData.append("about_me", newDog.about_me)
        newDogFormData.append("is_fixed", newDog.is_fixed)
        newDogFormData.append("has_bitten", newDog.has_bitten)
        newDogFormData.append("aggression", newDog.aggression)
        newDogFormData.append("breed", newDog.breed)
        newDogFormData.append("favorite_park", newDog.favorite_park)
        newDogFormData.append("gender", newDog.gender)
        newDogFormData.append("size", newDog.size)
        newDogFormData.append("socialization", newDog.socialization)
        newDogFormData.append("user", `${state.currentUser.user_id}`)
        newDogFormData.append("tags", newDog.tags)


        try {
            let options = {
              method: "POST",
              url: '/dogs/',
              data: newDog,
              headers: { "Content-Type": "multipart/form-data" },
            }
            let resp = await request(options)
            console.log(resp)
            dispatch({ dogs: [...state.dogs, resp.data]})
        } catch(error) {
            console.log(error)
        }
    }

    return (
    <div>
        <form className="form-new-dog" onSubmit={handleSubmit}>
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
                <select
                    className="newDogInput"
                    name="is_fixed"
                    // value={newDog.is_fixed}
                    onChange={handleChange}
                >
                    {optionsBoolean.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
            <label>
                Do they have a history of biting another dog or person?
                <select 
                    className="newDogInput"
                    name="has_bitten" 
                    // value={newDog.has_bitten}
                    onChange={handleChange} 
                >
                    {optionsBoolean.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
            <label>
                How would you rank their aggression?
                <select
                    className="newDogInput"
                    name="aggression"
                    // value={newDog.aggression}
                    onChange={handleChange}
                >
                    {optionsAggressionSocialization.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))} 
                </select>
            </label>
            <label>
                {/* eventually this one and parks will have a creatable input box that can relate
                 to the database and make a post if the breed or park aren't in the system yet */}
                Breed:
                <select
                    className="newDogInput"
                    name="breed"
                    // value={newDog.breed}
                    onChange={handleChange}
                >
                    {optionsBreed.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))} 
                </select>
            </label>
            <label>
                Favorite Park:
                <select
                    className="newDogInput"
                    name="favorite_park"
                    // value={newDog.favorite_park}
                    onChange={handleChange}
                >
                    {optionsPark.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}    
                </select>
            </label>
            <label>
                Gender:
                <select
                    className="newDogInput"
                    name="gender"
                    options={optionsGender}
                    // value={newDog.gender}
                    onChange={handleChange}
                >
                    {optionsGender.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))} 
                </select>
            </label>
            <label>
                Size:
                <select
                    className="newDogInput"
                    name="size"
                    // value={newDog.size}
                    onChange={handleChange}
                >
                    {optionsSize.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}  
                </select>
            </label>
            <label>
                How would you rank their exposure to other dogs and people?
                <select
                    className="newDogInput"
                    name="socialization"
                    // value={newDog.socialization}
                    onChange={handleChange}
                >
                    {optionsAggressionSocialization.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
            <label>
                Choose some hashtags to spice up your dog's profile!
                <select multiple
                    className="newDogInput"
                    name="tags"
                    // value={newDog.socialization}
                    onChange={handleChange}
                >
                    {optionsTags.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>  
            <button type="submit">
                Create
            </button>
        </form>
    </div>
    )
}

