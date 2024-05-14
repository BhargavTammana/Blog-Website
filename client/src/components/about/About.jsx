
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Blogify</Typography>
                <Text variant="h5">Welcome to Blogify! We're dedicated to providing a user-friendly platform for bloggers of all levels to share their stories, insights, and passions with the world. With our intuitive tools, vibrant community, and commitment to supporting our users, Blogify is the perfect place to start your blogging journey or take your content to the next level. Join us today and become part of our growing community of writers and readers who are passionate about the power of storytelling.<br />
                Have questions or need support? Feel free to reach out to us. We’re here to help!
                    
                </Text>
                <Text variant="h5">
                    Need something? Reach out to us on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/bhargav_oo4/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:bhargavttyl@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;