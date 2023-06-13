import Document from "../atoms/Document";
import { useContext } from "react";
import { MockUserData } from "../../../utilities/context/MockData";

const Documents = () => {
  const mockData: any = useContext(MockUserData);
  const userCredentials = mockData.Credentials;
  console.log(userCredentials);

  return (
    <div className="documents_container">
      {userCredentials.map((credential: any) => {
        return credential.Uploaded_documents.map((upload: any) => {
          return (
            <Document
              // img_url={upload.Image}
              date={upload.dateCreated}
              title={upload.Title}
              status={upload.Document_status}
            />
          );
        });
      })}
    </div>
  );
};

export default Documents;

