import Avatar from "./Avatar";
import Bio from "./Bio";

export default function Profile() {
  return (
    <div>
      <Avatar person={{ name: "Sumit Kumar 191" }} size={200} />
      <Bio />
    </div>
  );
}