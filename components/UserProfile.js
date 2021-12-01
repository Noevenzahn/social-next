import Image
    from "next/dist/client/image";
// UI component for user profile
export default function UserProfile({ user }) {
    return (
        <div className="box-center">
            <div className="card-img-center">
              <Image src={user.photoURL || '/hacker.png'} alt="" width={100} height={100} />
            </div>
            <p>
                <i>@{user.username}</i>
            </p>
            <h1>{user.displayName || 'Anonymous User'}</h1>
        </div>
    );
}