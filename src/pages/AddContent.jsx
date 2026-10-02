import { useState } from "react";

function AddContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Technology");
  const [status, setStatus] = useState("Draft");

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = {
      title,
      description,
      category,
      status,
    };

    localStorage.setItem("cmsContent", JSON.stringify(content));

    alert("Content saved successfully!");

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Add New Content</h1>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <label>Description</label>
        <br />
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        <label>Category</label>
        <br />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Technology</option>
          <option>Education</option>
          <option>Events</option>
          <option>AI and Machine Learning</option>
        </select>

        <br /><br />

        <label>Status</label>
        <br />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Draft</option>
          <option>Published</option>
        </select>

        <br /><br />

        <button type="submit">Save Content</button>
      </form>
    </div>
  );
}

export default AddContent;