import Male1 from "../assets/images/users/male1.svg";
import Male2 from "../assets/images/users/male2.svg";
import Male3 from "../assets/images/users/male3.svg";
import Female1 from "../assets/images/users/female1.svg";
import Female2 from "../assets/images/users/female2.svg";
import Female3 from "../assets/images/users/female3.svg";
import Unknown from "../assets/images/users/unknown.svg";

export const users = [
    {
      value: "Raymond Wilder",
      label: (
        <div className="avatar-container">
          <img className="avatar" src={Male1} alt="" />
          Raymond Wilder{" "}
        </div>
      ),
    },
    {
      value: "Matthew Coleman",
      label: (
        <div className="avatar-container">
          <img className="avatar" src={Male2} alt="" />
          Matthew Coleman{" "}
        </div>
      ),
    },
    {
      value: "William Kelly",
      label: (
        <div className="avatar-container">
          <img className="avatar" src={Male3} alt="" />
          William Kelly{" "}
        </div>
      ),
    },
    {
      value: "Jennifer Martin",
      label: (
        <div className="avatar-container">
          <img className="avatar" src={Female1} alt="" />
          Jennifer Martin{" "}
        </div>
      ),
    },
    {
      value: "Rosie Stewart",
      label: (
        <div className="avatar-container">
          <img className="avatar" src={Female2} alt="" />
          Rosie Stewart{" "}
        </div>
      ),
    },
    {
      value: "Lilian Murphy",
      label: (
        <div className="avatar-container">
          <img className="avatar" src={Female3} alt="" />
          Lilian Murphy{" "}
        </div>
      ),
    },
  ];