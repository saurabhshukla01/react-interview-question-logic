import React, { useState } from "react";

function MultiFileUpload() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const [status, setStatus] = useState({});

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setProgress({});
    setStatus({});
  };

  const uploadFiles = () => {
    files.forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://httpbin.org/post"); // Replace with your actual endpoint

      // Progress
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          setProgress((prev) => ({ ...prev, [file.name]: percent }));
        }
      };

      // Success/Error
      xhr.onload = () => {
        if (xhr.status === 200) {
          setStatus((prev) => ({ ...prev, [file.name]: "✅ Uploaded successfully" }));
        } else {
          setStatus((prev) => ({ ...prev, [file.name]: "❌ Upload failed" }));
        }
      };

      xhr.onerror = () => {
        setStatus((prev) => ({ ...prev, [file.name]: "❌ Upload error" }));
      };

      xhr.send(formData);
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>📤 Multi File Upload</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={uploadFiles} style={{ marginTop: "10px" }}>
        Upload Files
      </button>

      {files.map((file) => (
        <div key={file.name} style={{ marginTop: "15px" }}>
          <strong>{file.name}</strong>
          <div style={{ height: "10px", background: "#eee", margin: "5px 0" }}>
            <div
              style={{
                width: `${progress[file.name] || 0}%`,
                height: "10px",
                background: "#4caf50",
              }}
            ></div>
          </div>
          <div>{status[file.name]}</div>
        </div>
      ))}
    </div>
  );
}

export default MultiFileUpload;
