import { revalidatePath } from "next/cache"

const notes = [
  { id: 1, content: "next.js utilizes React Server Components", important: true },
  { id: 2, content: "next.js is built on top of React", important: true },
  {
    id: 3,
    content: "next.js supports both static and dynamic rendering",
    important: false,
  },
]

export const toggleImportant = (id: number) =>{
  const note = notes.find((note)=> note.id === id)
  if(note){
    note.important = !note.important
  }
}

export const toggleNoteImportance = async (formData: FormData) =>{
  const id = Number(formData.get("id"))
  toggleImportant(id);
  revalidatePath(`/notes/${id}`)
  revalidatePath("/notes")
}


let nextId = 4;

 export const getNotes = () =>{
    return notes
 }

 export const addNote = (content: string, important: boolean) => {
    notes.push({id: nextId++, content, important})
 }

 export const getNoteById = (id: number) => {
  return notes.find((note) => note.id === id)
}