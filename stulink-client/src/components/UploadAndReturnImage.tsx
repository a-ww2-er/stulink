import React, { useEffect, useState } from "react";
import { imageUpload } from "../utilities/imageUpload";
type ImageState = {
  photo: string | ArrayBuffer | null | any;
  loading: boolean;
};
function UploadAndReturnImage(props: {
  setFieldValue(arg0: string, url: any): any;
  items: any;
  file: Blob;
}) {
  const [file, setFile] = useState<ImageState>({
    photo: "No File Selected",
    loading: false,
  });

  useEffect(() => {
    const readfile = () => {
      setFile({ ...file, loading: true });
      const reader = new FileReader();
      reader.readAsDataURL(props.file);
      reader.onload = () => {
        setFile({ loading: false, photo: reader.result });
      };
      imageUpload(props.file)
        .then((url) => props.setFieldValue(`${props.items.name}`, url))
        .catch((err) => {
          console.log(err);
        });
    };
    readfile();
  }, [props.file]);

  const { loading, photo } = file;

  if (loading) {
    return <p>loading...</p>;
  }

  return (

    <img
      src={photo}
      alt={props.file.type}
      className="profile_photo"
   
    />
  );
}

export default  UploadAndReturnImage
