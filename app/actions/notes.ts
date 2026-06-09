"use server"


import { revalidatePath } from "next/cache";
import { addNote, toggleImportance } from "../services/notes";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const createNote = async (formData: FormData) => {
  const session = await auth()
  if (!session) {
    redirect("/login")
  }

  const rawContent = formData.get("content")
  if (typeof rawContent !== "string") {
    return
  }

  const content = rawContent.trim()
  if (!content) {
    return
  }

  const important = formData.get("important") === "on"
  await addNote(content, important)

  revalidatePath("/notes")
  redirect("/notes")
}

export const toggleNoteImportance = async (formData: FormData) => {
  const id = Number(formData.get("id"))
  await toggleImportance(id)
  revalidatePath(`/notes/${id}`)
  revalidatePath("/notes")
}