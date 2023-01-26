import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../pageStyles/Dashboard.css';

function EditRow(){
    return(
        <>
            <FontAwesomeIcon className="rowBtn editBtn" icon={faPen} />
        </>
    );
}

export default EditRow;