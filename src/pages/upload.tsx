import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";

const Upload = () => {
  const [imageUploaded, setImageUploaded] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageUploaded(event.target.files[0]);
    }
  };

  const submitData = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUploaded) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", imageUploaded);

      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="page">
        <form onSubmit={submitData}>
          <h1>Upload Image</h1>

          <input
            onChange={handleChange}
            accept=".jpg, .png, .gif, .jpeg"
            type="file"
          ></input>

          <input type="submit" value="Upload" className="text-black"/>
        </form>
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
        .page {
          // background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Upload;
