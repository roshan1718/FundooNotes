import React from 'react';
import CreateNote from '../createnote/createnote';
import DisplayNote from '../displaynote/note';
import '../notebox/notebox.scss'

export default function NoteBox (){
    return(
        <>
        <CreateNote/>
        <div className="note-display-div">
        <DisplayNote />
        </div>
        </>
    )
} 