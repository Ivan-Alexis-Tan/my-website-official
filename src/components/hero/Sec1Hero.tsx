export default function Sec1Hero() {
    return (
        <div className="p-4">
            <div className="flex items-center gap-3">
                <img src="/profile_icon_wht.png" width={50} height={50} alt="profile-icon" />
                <h1 className="text-4xl font-bold text-white">Profile</h1>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:gap-5 p-2 my-2 justify-center items-center">
                <div className="flex justify-center w-30 h-30 border overflow-hidden rounded-full">
                    <img src="/my-pfp.png" alt="my-pfp" className="w-28 h-37" />
                </div>
                
                <div className="flex flex-col items-center mb-5">
                    <h2 className="text-3xl font-bold text-white">Juan Dela Cruz</h2>
                    <p>Full-stack Developer | Software Developer</p>
                </div>
            </div>

            <p>I enjoy understanding how software works beneath the surface—from database design and authentication to deployment and application architecture—and using that knowledge to build maintainable, real-world applications.</p>
        </div>
    )
}