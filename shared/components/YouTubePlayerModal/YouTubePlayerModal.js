import classes from './YouTubePlayerModal.module.scss';

const YouTubePlayerModal = ({ link, toggleYoutubePlayerModal }) => {
    return (
        <div
            onClick={ toggleYoutubePlayerModal }
            className="overlay flex justify-content-center align-items-center">
            <div className={`${ classes["iframe-container"] } position-relative`}>
                <button
                    onClick={ toggleYoutubePlayerModal }
                    className={ classes["close-button"] }>
                    <i className="las la-times"></i>
                </button>
                <iframe
                    className={ classes["iframe"] }
                    src={ link }
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default YouTubePlayerModal;