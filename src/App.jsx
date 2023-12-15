import React from 'react';
import { getInitialData, showFormattedDate } from './utils/dummyData';
import Navbar from './components/Navbar';
import AddNoteForm from './components/AddNoteForm';
import Search from './components/Search';
import NoteList from './components/NoteList';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      searchQuery: '',
    };

    this.addNote = this.addNote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onDeleteHandlerArchived = this.onDeleteHandlerArchived.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  addNote(newNote) {
    this.setState(prevState => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  onDeleteHandlerArchived(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: updatedNotes });
  }

  onDeleteHandler(id) {
    const { archivedNotes } = this.state;
    
    const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== id);
  
    this.setState({
      archivedNotes: updatedArchivedNotes,
    });
  }

  onArchiveHandler(id) {
    const { notes, archivedNotes } = this.state;
    const selectedNote = notes.find((note) => note.id === id);

    if (selectedNote) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      const updatedArchivedNotes = [...archivedNotes, selectedNote];

      this.setState({
        notes: updatedNotes,
        archivedNotes: updatedArchivedNotes,
      });
    }
  }

  onUnarchiveHandler(id) {
    const { notes, archivedNotes } = this.state;
    const selectedNote = archivedNotes.find((note) => note.id === id);

    if (selectedNote) {
      const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== id);
      const updatedNotes = [...notes, selectedNote];

      this.setState({
        notes: updatedNotes,
        archivedNotes: updatedArchivedNotes,
      });
    }
  }

  handleSearch(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const { notes, archivedNotes, searchQuery } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        <Navbar />
        <AddNoteForm addNote={this.addNote} />
        <Search handleSearch={this.handleSearch} searchQuery={searchQuery} />
        <div className="flex flex-col w-11/12 mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-2 pt-10 dark:text-white">Active Notes</h2>
            <NoteList notes={filteredNotes} onDelete={this.onDeleteHandlerArchived} onArchive={this.onArchiveHandler} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 pt-10 dark:text-white">Archived Notes</h2>
            <NoteList notes={filteredArchivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onUnarchiveHandler} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;