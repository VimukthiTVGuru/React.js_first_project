import React from 'react'
import TopicBox from '../components/TopicBox'
export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <TopicBox topics="01" for="begines">
        <span><a href='www.ikman.lk'>click here...</a></span>
      </TopicBox>
      <TopicBox topics="02" for="trainers"/>
      <TopicBox topics="03" for="experts"/>
    </div>
  )
}
