import * as React from 'react';
import '../../styles/imageBox.scss'
import MetadataDialogComponent from './MetadataDialogComponent';
import EXIF from 'exif-js';

export const metadataKeys = ['ISOSpeedRatings', 'FNumber', 'ExposureTime', 'DateTime', 'PixelXDimension', 'PixelYDimension'];

export default function ImageComponent({ image, description }) {
    const [openModal, setOpenModal] = React.useState(false);
    const [metadataMap, setMetadataMap] = React.useState(null);

    const handleClose = () => {
        setOpenModal(false);
    };

    const handleOpen = () => {
        setOpenModal(true);
        getExif();
    };

    function getExif() {
        var img = document.getElementById(image);
        EXIF.getData(img, function () {
            if (metadataMap == null) {
                const tempMetadata = {};
                for (var name of metadataKeys) {
                    tempMetadata[name] = EXIF.getTag(img, name).toString();
                }
                setMetadataMap(tempMetadata);
            }
        });
    }

    if (metadataMap == null) {
        return (
            <>
                <img loading='lazy' id={image} className='image' src={image} onClick={handleOpen}></img>
            </>
        )
    }

    return (
        <>
            <img loading='lazy' id={image} className='image' src={image} onClick={handleOpen}></img>
            {openModal &&
                <MetadataDialogComponent metadata={metadataMap} toggleModal={handleClose} description={description} image={image} />
            }
        </>
    )

}