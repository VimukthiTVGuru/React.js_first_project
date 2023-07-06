import React from 'react'
import './topicbox.css'
export default function TopicBox() {
  const abc= "world";
  return (
    <div>
      <div className='topicBox'>
        <span>{alert("Hello "+abc)}</span>
        <span>This is the topic</span>
      </div>
    </div>
  )
}
