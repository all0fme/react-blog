import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>

                </div>
                <form className="settingsForm">
                    <label >Profile picture</label>
                    <div className="settingsPP">
                        <img className='settingsPPImg' src="assets/profile.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i></label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label for="">Username</label>
                    <input type="text" placeholder='all0fme' />
                    <label for="">Email</label>
                    <input type="email" placeholder='all0fme@gmail.com' />
                    <label for="">Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>

                </form>

            </div>
            <Sidebar />
        </div>
    )
}
