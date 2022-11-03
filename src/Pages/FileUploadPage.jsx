import { useState } from "react";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    fetch("http://https://sure-cook-production.up.railway.app/uploads", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        alert("הצלחה !");
        window.location.reload(false);
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="UPlo">
      <input type="file" name="file" onChange={changeHandler} />
      <hr/>
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <>
        <br/>
        <p>Select a file to uploads</p></>
        
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
export default FileUploadPage;
