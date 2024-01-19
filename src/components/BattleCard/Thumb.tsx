import React from "react"

const Thumb = ({ thumbsUp }: SwordsProps) => {
    return (
        <iframe
            title="thumb"
            style={{ border: "none", width: 200, height: 200, transform: thumbsUp ? "scale(-1, -1)" : "scale(1, 1)" }}
            src="https://lottie.host/embed/dab4f170-d90c-4567-92c9-c762d9ef835a/GTPoCPjy6a.json"
        ></iframe>
    )
}

type SwordsProps = {
    thumbsUp: Boolean
}

export default Thumb
