import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const HeaderComponent = () => {
  return (
    <header className="block header">
        <div className="wrapper full">
            <div className="row">
                <div className="col">
                    <button className="hamburger">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <Image 
                        src={'/assets/logo/logo.svg'}
                        alt='boston'
                        width={160}
                        height={20}
                        className='logo'
                    />
                </div>
                <h2 className="news-title">baseball</h2>
                <div className="col">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderComponent