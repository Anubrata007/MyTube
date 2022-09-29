import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack
        direction='row'
        alignItems='center'
        p={2}
        sx={{ position: 'sticky', background: '#E7E7E7', top: 0, justifyContent: 'space-between' }}>

        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ margin: 'auto', fontSize: '36px' }}>My<span style={{ color: '#e73827' }}>Tube</span></h2>
        </Link>
        <SearchBar />
    </Stack>
)

export default Navbar