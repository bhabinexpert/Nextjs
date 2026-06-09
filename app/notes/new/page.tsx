import { createNote } from "../../actions/notes"

export default function NewNotePage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>New Note</h1>
      <form action={createNote}>
        <div>
          <label htmlFor="content">Content</label>
          <br />
          <textarea
            id="content"
            name="content"
            rows={5}
            style={{ width: "100%", maxWidth: 480 }}
            placeholder="Write your note here"
            required
          />
        </div>
        <div style={{ marginTop: 12 }}>
          <label>
            <input type="checkbox" name="important" /> Important
          </label>
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Create note</button>
        </div>
      </form>
    </div>
  )
}