import React, { useState } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from "react-redux"
const initialState = {};
function CreateProject(props) {

    const [project, setProjectInfo] = useState(initialState);
    function handleSubmit(e) {
        e.preventDefault();
        //console.log(userInfo);
        props.createProject(project);
        props.history.push("/");
    }

    function handleChange(e) {
        setProjectInfo({ ...project, [e.target.id]: e.target.value });
    }

    return (
        <div className="container">
            <form action="" onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create new Project</h5>
                <div className="input-filed">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={handleChange} />
                </div>
                <div className="input-filed">
                    <label htmlFor="content">Project Content</label>
                    <textarea className="materialize-textarea" id="content" onChange={handleChange}>

                    </textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    };
}

export default connect(null, mapDispatchToProps)(CreateProject);
