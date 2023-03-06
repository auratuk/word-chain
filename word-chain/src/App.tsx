import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Card, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div>
        <Grid container spacing={2}>
          <Grid>
            <Card sx={{ minWidth: 275 }}>1</Card>
          </Grid>
          <Grid>
            <Card sx={{ minWidth: 275 }}>2</Card>
          </Grid>
          <Grid>
            <Card sx={{ minWidth: 275 }}>3</Card>
          </Grid>
          <Grid>
            <Card sx={{ minWidth: 275 }}>4</Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
