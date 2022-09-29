import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from '../utils/fetchFromAPI';

import { Sidebar, Videos } from './';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: 'row' } }}>

            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #CACDCD', px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#000' }}>
                    Copyright &copy;Anubrata Chakraborty
                </Typography>
            </Box>


            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant="h4" fontWeight='bold' mb={2}>
                    {selectedCategory} <span style={{ color: '#f85032' }}>video</span>
                </Typography>

                <Videos videos={videos} />
            </Box>

        </Stack>
    )
}

export default Feed 