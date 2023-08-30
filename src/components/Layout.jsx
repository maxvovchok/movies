// import { NavLink, Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// import styles from '../styles.module.css';

// export const Layout = () => {
//   return (
//     <>
//       <header>
//         <ul className={styles.headerList}>
//           <li className={styles.headerItem}>
//             <NavLink className={styles.headerItemLink} to="/">
//               Home
//             </NavLink>
//           </li>
//           <li className={styles.headerItem}>
//             <NavLink className={styles.headerItemLink} to="/movies">
//               Movies
//             </NavLink>
//           </li>
//         </ul>
//       </header>

//       <Suspense fallback={<div>Loading...</div>}>
//         <main>
//           <Outlet />
//         </main>
//       </Suspense>
//     </>
//   );
// };
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
} from '@mui/material';

import { styled } from '@mui/system';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#141414',
}));

const HeaderList = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const HeaderItem = styled('li')(({ theme }) => ({
  marginRight: theme.spacing(3),
}));

const HeaderItemLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1rem',
  '&:hover': {
    color: '#E50914',
  },
}));

const MainContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
}));

export const Layout = () => {
  return (
    <>
      <CssBaseline />
      <AppBarStyled position="static">
        <Container>
          <Toolbar>
            <HeaderList>
              <HeaderItem>
                <HeaderItemLink to="/">Home</HeaderItemLink>
              </HeaderItem>
              <HeaderItem>
                <HeaderItemLink to="/movies">Movies</HeaderItemLink>
              </HeaderItem>
            </HeaderList>
          </Toolbar>
        </Container>
      </AppBarStyled>

      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};
