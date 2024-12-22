import { FaEye, FaHeart } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { TfiThought } from "react-icons/tfi"
import { Link } from "react-router-dom";
import { formatMemberSince } from "../utlis/functions";

const ProfileInfo = ({ userProfile }) => {
    // const userProfile = {
    //     avatar_url: "myphoto.PNG",
    //     bio: "🐱‍💻🐱‍💻🐱‍💻",
    //     email: "johndoe@gmail.com",
    //     followers: 100,
    //     following: 200,
    //     html_url:"https://github.com/burakorkmez",
    //     location: "Somewhere, Earth",
    //     name: "John Doe",
    //     public_gists: 100,
    //     public_repos: 100,
    //     twitter_username: "JohnDoe",
    //     login: "johndoe"
    // };
    const memberSince = formatMemberSince(userProfile?.created_at)


    return (
        <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10">
            <div className="bg-glass rounded-lg p-4">
                {/* user avatar */}

                <div className="flex gap-3 items-center">
                    <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
                      <img src={userProfile?.avatar_url} className="rounded-md w-24 h-24 mb-2" alt='' />  
                    </a>
                    {/* view on github */}

                    <div className="flex gap-2 items-center flex-col">
                        <Link
                        to="likes"
                        rel="noreferrer"
                        className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400
                        flex items-center gap-2"
                        >
                            <FaHeart size={16} />
                            Likes profile
                        </Link>
                        <a
                        href={userProfile.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400
                        flex items-center gap-2"
                        >
                            <FaEye size={16} />
                            view on Github
                        </a>
                    </div>
                </div>
                

                {/* User Bio */}
                {userProfile?.bio ? (
                    <div className="flex items-center gap-2">
                        <TfiThought />
                        <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
                    </div>
                ) : null }     

                {/* User Location */}
                {userProfile?.location ? (
                    <div className="flex items-center gap-2">
                        <IoLocationOutline />
                        {userProfile?.location}
                    </div>
                ) : null }      

                {/* Twitter username       */}
                {userProfile?.twitter_username ? (
                    <div className="flex items-center gap-2">
                        <FaXTwitter />
                        {userProfile?.twitter_username}
                    </div>
                ) : null }      

                {/* Member since date */}
                <div className="my-2">
                    <p className="text-gray-600 font-bold text-sm">Member since</p>
                    <p className="">{memberSince}</p>
                </div> 

                {/* Fullname */}
                <div className="my-2">
                    <p className="text-gray-600 font-bold text-sm">Fullname</p>
                    <p className="">{userProfile?.name}</p>
                </div> 

                {/* Username */}
                <div className="my-2">
                    <p className="text-gray-600 font-bold text-sm">Username</p>
                    <p className="">{userProfile?.login}</p>
                </div> 
            </div>

            <div className="flex flex-wrap gap-2 mx-4">
                {/* Followers Count */}
                <div className="flex items-center gap-3 bg-glass rounded-lg p-2 flex-1">
                    <RiUserFollowFill className="w-5 h-5 text-blue-800" />
                    <p className="text-xs">Followers: {userProfile?.followers}</p>
                </div>

                {/* Following Count */}
                <div className="flex items-center gap-3 bg-glass rounded-lg p-2 flex-1">
                    <RiUserFollowLine className="w-5 h-5 text-blue-800" />
                    <p className="text-xs">Following: {userProfile?.following}</p>
                </div>

                {/* Numbers of public repos */}
                <div className="flex items-center gap-3 bg-glass rounded-lg p-2 flex-1">
                    <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
                    <p className="text-xs">Public Repos: {userProfile?.public_repos}</p>
                </div>

                {/* Numbers of public gists */}
                <div className="flex items-center gap-3 bg-glass rounded-lg p-2 flex-1">
                    <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
                    <p className="text-xs">Public Gists: {userProfile?.public_gists}</p>
                </div>
            </div>
        </div>
    )

  

}

export default ProfileInfo