import React from 'react'

export default function VideoPlayer({ videoUrl }) {
    return (
        <div>
              <iframe
            width="919"
            height="525"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
        </div>
    )
}
