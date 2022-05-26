import { useState } from "react";
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';
import NewDogImageModal from '../components/newDogImage';
import {Button} from 'react-bootstrap';

const optionsAggressionSocialization = [
    {value:1, label:"Low"},
    {value:2, label:"Medium"},
    {value:3, label:"High"}
]

const optionsFixed = [
    {value:true, label:"Yes"},
    {value:false, label:"No"}
]

const optionsBitten = [
    {value:false, label:"Yes"},
    {value:true, label:"No"}
]

const optionsGender = [
    {value:1, label:"Female"},
    {value:2, label:"Male"}
]

const optionsSize = [
    {value:1, label:"Extra Small"},
    {value:2, label:"Small"},
    {value:3, label:"Medium"},
    {value:4, label:"Large"},
    {value:5, label:"Extra Large"}
]

const optionsBreed = [
    {
        value: 1,
        label: "Huskey"
    },
    {
        value: 2,
        label: "Australian Shepherd"
    },
    {
        value: 3,
        label: "German Shepherd"
    },
    {
        value: 4,
        label: "Beagle"
    },
    {
        value: 5,
        label: "Lab"
    },
    {
        value: 6,
        label: "Chihuahua"
    },
    {
        value: 7,
        label: "Bulldog"
    },
    {
        value: 8,
        label: "Golden Retriever"
    },
    {
        value: 9,
        label: "Boxer"
    },
    {
        value: 10,
        label: "Border Collie"
    },
    {
        value: 11,
        label: "Poodle"
    },
    {
        value: 12,
        label: "Shih Tzu"
    },
    {
        value: 13,
        label: "Pug"
    },
    {
        value: 14,
        label: "Golden Doodle"
    }
]

const optionsPark = [
    {value:1, label:"Wellington Park"},
    {value:1, label:"Jacobson Park"},
    {value:2, label:"Lake Reba Park"}
]

const optionsTags = [
    {value:1, label:"Hyper"},
    {value:2, label:"Swimmer"},
    {value:3, label:"WallLeaner"},
    {value:4, label:"Shedder"},
    {value:5, label:"Slobber Monster"},
    {value:6, label:"Cuddler"},
]



export default function AddDogForm({ hidefirst }) {
    const [state, dispatch] = useGlobalState();
    const [modalShow, setModalShow] = useState(false);
    const [thisDogId, setThisDogId] = useState();
    const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    birthday: "",
    about_me: "",
    is_fixed: true,
    has_bitten: false,
    aggression: 1,
    breed: 1,
    favorite_park: 1,
    gender: 1,
    size: 1,
    socialization: 1,
    user: `${state.currentUser.user_id}`,
    tags: []
  });



    const handleChange = (event) => {
        // var name = event.target.getAttribute("name");
        if ([event.target.name] == "tags") {
                setNewDog(
                       { ...newDog, 
                        tags: [...newDog.tags, event.target.value]
                        // tags: newDog.tags.push(event.target.value)
                        // [event.target.name]: newDog.tags.push("hey")
                    });
                }
                else {
                    setNewDog({
                        ...newDog,
                        [event.target.name]: event.target.value,
                    });
        }
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let options = {
              method: "POST",
              url: '/dogs/',
              data: newDog,
            }
            let resp = await request(options)
            setThisDogId(resp.data.id);
            console.log(resp)
            dispatch({ dogs: [...state.dogs, resp.data]})
            var existing = JSON.parse(localStorage.getItem('mydogs'));
            existing = existing ? existing : [];
            localStorage.setItem('mydogs', JSON.stringify([...existing, resp.data]));
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
                    {optionsFixed.map((option) => (
                        <option value={option.value} key={option.label}>{option.label}</option>
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
                    {optionsBitten.map((option) => (
                        <option value={option.value} key={option.label}>{option.label}</option>
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
                        <option value={option.value} key={option.label}>{option.label}</option>
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
                        <option value={option.value} key={option.label}>{option.label}</option>
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
                        <option value={option.value} key={option.label}>{option.label}</option>
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
                        <option value={option.value} key={option.label}>{option.label}</option>
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
                        <option value={option.value} key={option.label}>{option.label}</option>
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
                        <option value={option.value} key={option.label}>{option.label}</option>
                    ))}
                </select>
            </label>
            <label>
                Choose a hashtag to spice up your dog's profile!
                {/* change this select to multiple once tags are figured out */}
                <select 
                    className="newDogInput"
                    name="tags"
                    onChange={handleChange}
                >
                    <option disabled selected value> -- select an option -- </option>
                    {optionsTags.map((option) => (
                        <option value={option.value} key={option.label}>{option.label}</option>
                    ))}
                </select>
            </label>  
            <Button type="submit" onClick={() => setModalShow(true)}>
                Next
            </Button>
        </form>
        <NewDogImageModal thisDogId={thisDogId} hidefirst={hidefirst} show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
    )
}

