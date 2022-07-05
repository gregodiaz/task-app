import { Breadcrumbs, Typography, Link, Stack, Container } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="#f2f2f2" href="/tasks" onClick={handleClick}>
      Gregorio
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#f2f2f2"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Tasks
    </Link>,
  ];

  return (
    <Container>
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ArrowBackIos fontSize="large" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    </Container>
  );
}
