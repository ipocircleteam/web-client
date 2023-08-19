import React from 'react'
import TrackerBtn from '@/components/Buttons/tracker-btn'
import Image from 'next/image'
import { Compress, Expand, Light, Dark } from '../../../../public/icons'
import { NavButtonsType } from './trackermenu.types'

export default function NavButons(props: NavButtonsType) {
  return (
    <section
      className={
        (props.darkMode
          ? 'bg-panelDark md:bg-transparent '
          : 'bg-gray-400 md:bg-transparent ') +
        'flex justify-center items-center flex-wrap border border-secondary md:border-none rounded md:bg-none my-2 md:my-0'
      }
    >
      <TrackerBtn
        text="Exit"
        contentType="text"
        darkMode={props.darkMode}
        callback={() => {
          window.location.replace('/')
          props.toggleFullScreen()
        }}
      >
        <p className="uppercase">Exit</p>
      </TrackerBtn>

      <TrackerBtn
        text={!props.isFullScreen ? 'Full Screen' : 'Exit'}
        callback={props.toggleFullScreen}
        contentType="Image"
        darkMode={props.darkMode}
      >
        <Image
          width={25}
          height={20}
          className={props.darkMode ? 'invert-[0.75]' : 'invert-[0.1]'}
          src={props.isFullScreen ? Compress : Expand}
          alt={props.isFullScreen ? 'Full Screen' : 'Exit'}
        />
      </TrackerBtn>

      <TrackerBtn
        text={props.darkMode ? 'Light' : 'Dark'}
        callback={props.toggleMode}
        contentType="Image"
        darkMode={props.darkMode}
      >
        <Image
          width={20}
          height={20}
          className={props.darkMode ? 'invert-[0.75]' : ''}
          src={props.darkMode ? Light : Dark}
          alt={props.darkMode ? 'Light' : 'Dark'}
        />
      </TrackerBtn>
    </section>
  )
}
