import React from 'react';
import './Home.scss'

type HomeProps = {
    name: string
}

const HomeContents: HomeProps[] = [
    {name: 'content1'},
    {name: 'content2'},
]

const renderContents = () => {
    const result = []
    for (let content of HomeContents) {
        result.push(
            <div className="HomeContent">${content.name}</div>
        )
    }
    return result
}

const Home: React.FC<HomeProps> = ({name}) => (
    <div className='Home'>
        <div className='HomeLeft'>
            {renderContents()}
        </div>
        <div className='HomeRight'>
            <button>
                LOGIN
            </button>
            <button>
                REGISTER
            </button>
        </div>
    </div>
)

export default Home;