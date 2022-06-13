export type ProfileProps = {
     name: string
}

export const Profile = ({name}:ProfileProps) => {
    return <div>Private profil component, Name is {name}</div>
}