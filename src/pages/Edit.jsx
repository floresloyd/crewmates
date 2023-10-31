/* eslint-disable no-unused-vars */
import Form from "../components/Form";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();

  return (
    <div>
      <Form id={id} />
    </div>
  );
}

export default Edit;
