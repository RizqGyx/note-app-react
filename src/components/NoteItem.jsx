import React from 'react';
import NoteButton from './NoteButton';
import NoteContent from './NoteContent';

function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="flex flex-col border-[#1a1b1e] border-2 dark:border-white">
      {title ? (
        <>
          <NoteContent title={title} createdAt={createdAt} body={body} />
          <NoteButton id={id} onArchive={onArchive} onDelete={onDelete} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-4">
          <p>No matching notes found.</p>
        </div>
      )}
    </div>
  );
}

export default NoteItem;