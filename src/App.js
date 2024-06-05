import React from 'react'; // Importing React library
import { Container, Typography } from '@mui/material'; // Importing Container and Typography components from MUI (Material UI) library
import ItemList from './components/ItemList'; // Importing the ItemList component from the specified path

// Define the main App component
const App = () => {
  return (
    <Container>
      {/* Title with variant "h2", centered text, and margin */}
      <Typography variant="h2" sx={{ textAlign: 'center', margin: '20px 0' }}>
        Item List
      </Typography>
      {/* Render the ItemList component */}
      <ItemList />
    </Container>
  );
};

// Export the App component as the default export
export default App;
