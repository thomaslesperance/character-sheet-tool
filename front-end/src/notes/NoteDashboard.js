//
import Header from '../layout/Header';
import NotesDisplay from './NoteDisplay';
import NoteForm from './NoteForm';

export default function NoteDashboard() {
  return (
    <main>
      <Header headerText={'Notes Header'} />
      <NotesDisplay notes={true} />
      <NoteForm />
    </main>
  );
}
