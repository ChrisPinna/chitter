import React, { useState }  from 'react';

const Form = () => {
    const [values, setValues] = useState({
        creator: "",
        title: "",
        message: "",
        imageLink: "",
    });

    const handleCreatorInputChange = (event) => {
        setValues({...values, creator: event.target.value})
    }

    const handleTitleInputChange = (event) => {
        setValues({...values, title: event.target.value})
    }

    const handleMessageInputChange = (event) => {
        setValues({...values, message: event.target.value})
    }
    
    const handleImageLinkInputChange = (event) => {
        setValues({...values, imageLink: event.target.value})
    }


    return (
        <div 
            className="form_container">
            <h1>
                FORM
            </h1>
            <lable 
                for="from_creator">
                Creator
            </lable>
            <br/>
            <input 
                onChange={handleCreatorInputChange}
                value={values.creator}
                className="from_creator" 
                type="text">
            </input>
            <br/>
            <br/>
            <lable 
                for="form_title">
                Title
            </lable>
            <br/>
            <input 
                onChange={handleTitleInputChange}
                value={values.title}
                className="form_title" 
                type="text">
            </input>
            <br/>
            <br/>
            <lable 
                for="form_message">
                Message
            </lable>
            <br/>
            <input 
                onChange={handleMessageInputChange}
                value={values.message}
                className="form_message" 
                type="text">
            </input>
            <br/>
            <br/>
            <lable 
                for="from_image_link">
                Image link
            </lable>
            <br/>
            <input 
                onChange={handleImageLinkInputChange}
                value={values.imageLink}
                className="from_image_link"
                type="text">
            </input>
            <br/>
            <br/>
            <input 
                className="peep_button" 
                type="submit" 
                value="Peep">
            </input>
        </div>
        
    )
}

export default Form;