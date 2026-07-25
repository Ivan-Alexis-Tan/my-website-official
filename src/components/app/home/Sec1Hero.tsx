export default function Sec1Hero() {
    return (
        <div className="p-4 gap-5 flex flex-col justify-between">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <img src="/profile_icon_wht.png" width={50} height={50} alt="profile-icon" />
                <h1 className="text-4xl font-bold text-(--text-h)">Profile</h1>
            </div>
            
            {/* Profile Details */}
            <div className="flex flex-col sm:flex-row sm:gap-5 justify-center items-center">
                <div className="flex justify-center w-30 h-30 border overflow-hidden rounded-full bg-(--text-h)">
                    <img src="/my-pfp.png" alt="my-pfp" className="w-28 h-37" />
                </div>
                
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-(--text-h) text-center">Juan Dela Cruz</h2>
                    <p className="text-center">Full-stack Dev. | Web App Dev. | Data Analyst</p>
                </div>
            </div>

            {/* Introductory Paragraph */}
            <p>I enjoy understanding how software works beneath the surface—from database design and authentication to deployment and application architecture—and using that knowledge to build maintainable, real-world applications.</p>
        </div>
    )
}