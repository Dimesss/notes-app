import React from "react";
import PropTypes from "prop-types"
import "./NoteCard.style.css";

function NoteCard({ title, body, color }) {
    
    return(
     <div className="c-note-card" style={{ backgroundColor: color }}>
        <p className="c-note-title">
            {title}
        </p>

        <p className="c-note-body">
            {body}
        </p>
     </div>

    );
}

NoteCard.propTypes = {
    title : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    body : PropTypes.string,
    color : PropTypes.string,
};

NoteCard.defaultValues = {
    body : "",
    color : "white"
};

export default NoteCard;