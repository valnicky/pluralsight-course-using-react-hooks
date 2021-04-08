import React from 'react'
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver"

function ImageChangeOnMouseOver() {
    return ( < div >
<ImageToggleOnMouseOver primaryImg="/public/static/cat-black.png" secondaryImg="/public/static/cat-black.png" alt=""/>
&nbsp;&nbsp;&nbsp;
<ImageToggleOnMouseOver src="/static/speakers/bw/Speaker-1124.jpg" alt=""/>
        </div>
    )
}

export default ImageChangeOnMouseOver