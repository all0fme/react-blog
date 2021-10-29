import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img className='writeImg'
                src="assets/coast.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='title' className='writeInput' autoFocus={true} />

                </div>
                <div class="writeFormGroup">
                    <textarea
                        placeholder='Tell your story...'
                        type='text'
                        className='writeInput writeText'
                    ></textarea>
                </div>
                <button class="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
