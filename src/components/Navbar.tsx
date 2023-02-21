import { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { pages } from '../pages';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { PageMenuItem } from '../types';


export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Box sx={{ mr: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page: PageMenuItem) => (
                            <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} href={page.path}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Marcos Cassiano
                </Typography>
                <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page: PageMenuItem) => {
                        const { name, path } = page;
                        return (
                            <Link
                                key={name}
                                variant="button"
                                color="text.primary"
                                href={path}
                                sx={{ textDecoration: 'none', my: 1, mx: 1.5 }}
                            >
                                {name}
                            </Link>
                        )
                    })}
                </Box>
                <Button component={Link} href="https://www.dropbox.com/s/kteqh7786lpcwus/Curriculo_Marcos_Cassiano_Melo_Feijao.pdf?dl=0" target="_blank" variant="text" sx={{ my: 1, mx: 1.5 }}>
                    Currículo
                </Button>
            </Toolbar>
        </AppBar>
    )
}
