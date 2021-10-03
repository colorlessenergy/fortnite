import classes from './YouTubePlayerModal.module.scss';

const YouTubePlayerModal = ({ link }) => {
    return (
        <div className="overlay flex justify-content-center align-items-center">
            <div className="position-relative">
                <button className={ classes["close-button"] }>
                    <i className="las la-times"></i>
                </button>
                <iframe width="560" height="315" src={ link } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default YouTubePlayerModal;