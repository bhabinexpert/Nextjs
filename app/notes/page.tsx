import { getNotes } from "../services/notes"
import NoteList from "../notelist";

const Notes = ()=>{
    const notes = getNotes();
    return(
        <div>
            <h2>
                Notes
            </h2>
          <NoteList notes={notes} />
        </div>
    )
}
export default Notes