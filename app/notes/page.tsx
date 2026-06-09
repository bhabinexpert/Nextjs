import { getNotes } from "../services/notes"
import NoteList from "../notelist"

const Notes = async ({ searchParams }: { searchParams: Promise<{ important?: string }> }) => {
  const { important } = await searchParams
  const showImportant = important === "true"

  const notes = await getNotes(showImportant)

  return <NoteList notes={notes} />
}

export default Notes