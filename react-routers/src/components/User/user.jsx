import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className=" bg-gray-700  text-white text-xl p-4 text-center">
      User : {id}
    </div>
  );
}

export default User;
