const images = [
    'https://source.unsplash.com/random/1600x900',
    'https://source.unsplash.com/random/1600x900/?nature',
    'https://source.unsplash.com/random/1600x900/?water',
  ];
  
  export default function AboutCheck() {
    const [imageIndex, setImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Container imageUrl={images[imageIndex]}>
        <ContentContainer>
          <Column
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Column 1
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
              ultrices augue. Pellentesque ultrices justo in dolor dignissim, nec
              bibendum magna tristique.
            </Typography>
          </Column>
          <Column
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Column 2
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
              ultrices augue. Pellentesque ultrices justo in dolor dignissim, nec
              bibendum magna tristique.
            </Typography>
          </Column>
        </ContentContainer>
    </Container>
    )};
  