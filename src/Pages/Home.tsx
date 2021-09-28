import React from 'react';

type HomeProps = {
    name: string
}

const Home: React.FC<HomeProps> = ({name}) => (
    <div>
        This is {name}
    </div>
)

export default Home;