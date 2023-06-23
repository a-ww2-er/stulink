import { GoKebabHorizontal } from "react-icons/go";
const UserPost = () => {
  return (
    <div className="user_post">
      <h1>Business in Franco</h1>
      <p>@Erik Shade/James Academy</p>
      <hr />
      <p>
        Lorem ipsum dolor sit, amedt consectetur adipisicing elit. Eius autem
        voluptatem, ut modi voluptate magni unde beatae possimus! Magnam,
        expedita.
      </p>
      <span>
        <p>Views</p> <p>Like</p> <p>Save</p> <GoKebabHorizontal />{" "}
      </span>
    </div>
  );
};

export default UserPost;
