import React from 'react'
import './topicbox.css'
export default function TopicBox(props) {

  return (
    <div>
      <div className='topicBox'>
        <span>This is the topic {props.topics} for {props.for}.</span>
        {props.children}
      </div>
    </div>
  )
}
