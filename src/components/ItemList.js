import React, { useEffect, useState } from 'react'; // Importing React and hooks from the React library
import { Container, TextField, Grid, Card, CardContent, Typography } from '@mui/material'; // Importing MUI components
import axios from 'axios'; // Importing axios for making HTTP requests

// Define the ItemList component
const ItemList = () => {
  const [items, setItems] = useState([]); // State to hold the list of items
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term

  // useEffect hook to fetch data from API when the component mounts
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setItems(response.data); // Set the items state with the fetched data
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error); // Log an error if the request fails
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Handler function to update searchTerm state when the input value changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the items based on the search term
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* TextField for search input */}
      <TextField
        label="Search" // Label for the TextField
        variant="outlined" // Outlined style for the TextField
        fullWidth // Make the TextField take the full width of its container
        margin="normal" // Normal margin for spacing
        value={searchTerm} // Bind the TextField value to searchTerm state
        onChange={handleSearchChange} // Update the searchTerm state on change
      />
      {/* Grid container for responsive layout */}
      <Grid container spacing={3} mt={2}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}> {/* Responsive grid items */}
            <Card variant="outlined"> {/* Card component for a card-like appearance */}
              <CardContent>
                <Typography variant="h6" component="div"> {/* Title of the item */}
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary"> {/* Body of the item */}
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Export the ItemList component as the default export
export default ItemList;
