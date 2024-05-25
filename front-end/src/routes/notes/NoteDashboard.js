import * as React from "react";
//
import Header from "../../layout/Header";
import NotesDisplay from "./NoteDisplay";
import NoteForm from "./NoteForm";

export default function NoteDashboard() {
  return (
    <main className="border">
      <Header headerText={"Notes"} />
      <NotesDisplay notes={true} />
      <NoteForm />
    </main>
  );
}
