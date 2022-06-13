import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const navigate = useNavigate();
    
    const addMeetupHandler = (meetupData) => {
        fetch(
            "https://meetup-project-2db5d-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST", 
                body: JSON.stringify(meetupData),
                headers: {'Content-Type': 'application/JSON'}
            }).then(() => {
                navigate("/", {replace: true });
            });
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;