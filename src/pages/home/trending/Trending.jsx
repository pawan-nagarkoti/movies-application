import React, { useEffect, useState } from 'react';
import './style.scss';
import ContentWraper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
    const [endpoint, setEndpoint] = useState('day');
    const { data, loading } = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab, index) => {
        setEndpoint(tab === 'Day' ? 'day' : 'week')
    }
    return (
        <div className="carouselSection">
            <ContentWraper>
                <span className='carouselTitle'>Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWraper>
            <Carousel data={data?.results} loading={loading} />
        </div >
    )
}

export default Trending