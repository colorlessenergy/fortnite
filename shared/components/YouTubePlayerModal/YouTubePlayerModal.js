import classes from './YouTubePlayerModal.module.scss';

const YouTubePlayerModal = ({ link, toggleYoutubePlayerModal }) => {
    return (
        <div
            onClick={ toggleYoutubePlayerModal }
            className="overlay flex justify-content-center align-items-center">
            <div className="position-relative">
                <button
                    onClick={ toggleYoutubePlayerModal }
                    className={ classes["close-button"] }>
                    <i className="las la-times"></i>
                </button>
                <iframe width="560" height="315" src={ link } frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default YouTubePlayerModal;