// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

// Update the post
const updateuniversalPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-universal-post").value.trim();
  const content = document
    .querySelector("#content-update-universal-post")
    .value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
      alert("Failed to update a post."); // When unsuccessful, show alert
    }
  }
};

// Delete the post
const deleteuniversalPostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard"); // When successful, load the dashboard page
  } else {
    alert("Failed to delete a post."); // When unsuccessful, show alert
  }
};

// Event listeners
const updateuniversalPostButton = document.querySelector("#update-universal-post");

if (updateuniversalPostButton) {
  updateuniversalPostButton.addEventListener("click", updateuniversalPostFormHandler);
}

const deleteuniversalPostButton = document.querySelector("#delete-universal-post");

if (deleteuniversalPostButton) {
  deleteuniversalPostButton.addEventListener("click", deleteuniversalPostFormHandler);
}
