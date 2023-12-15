import React from 'react'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'

function NoteButton({ id, onArchive, onDelete }) {
  return (
    <div className='flex'>
        <ArchiveButton id={id} onArchive={onArchive}/>
        <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  )
}

export default NoteButton