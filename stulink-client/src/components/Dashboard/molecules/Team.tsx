import Member from "../atoms/Member"

type TeamProps = {
    classname:string
}

const Team = ({classname}: TeamProps) => {
  return (
    <div className={classname}>
        <hr />
        <h2>Team</h2>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
        <hr />
    </div>
  )
}

export default Team