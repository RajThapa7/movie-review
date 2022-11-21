import React from 'react'
import SingleCard from './singleCard'
import SliderButton from './sliderButton'

export default function List() {
  return (
    <>
    <SliderButton title1='On TV' title2="In Theatres"></SliderButton>
    <div className='flex flex-row overflow-x-scroll space-x-8'>
    
    <SingleCard></SingleCard>
    <SingleCard></SingleCard>

    <SingleCard></SingleCard>
    <SingleCard></SingleCard>
    <SingleCard></SingleCard>
    <SingleCard></SingleCard>
    <SingleCard></SingleCard>
    <SingleCard></SingleCard>

    <SingleCard></SingleCard>
    </div>
    </>
  )
}
